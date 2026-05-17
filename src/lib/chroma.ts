import { ChromaClient, type Collection } from "chromadb";

const COLLECTION_NAME = process.env.CHROMA_COLLECTION?.trim() || "personal_memory";

function createClient() {
  const urlStr = process.env.CHROMA_URL?.trim() || "http://localhost:8000";
  const url = new URL(urlStr.includes("://") ? urlStr : `http://${urlStr}`);
  const port = url.port ? Number(url.port) : url.protocol === "https:" ? 443 : 80;
  return new ChromaClient({
    host: url.hostname,
    port,
    ssl: url.protocol === "https:",
  });
}

let collectionPromise: Promise<Collection> | null = null;

async function getCollection() {
  if (!collectionPromise) {
    const client = createClient();
    collectionPromise = client.getOrCreateCollection({
      name: COLLECTION_NAME,
    });
  }
  return collectionPromise;
}

export async function upsertToChroma(args: {
  ids: string[];
  embeddings: number[][];
  documents: string[];
  metadatas?: Record<string, string | number | boolean>[];
}) {
  const col = await getCollection();
  await col.upsert({
    ids: args.ids,
    embeddings: args.embeddings,
    documents: args.documents,
    metadatas: args.metadatas,
  });
}

export async function queryChroma(args: { embedding: number[]; nResults: number }) {
  const col = await getCollection();
  const res = await col.query({
    queryEmbeddings: [args.embedding],
    nResults: args.nResults,
    include: ["documents", "metadatas", "distances"],
  });

  return {
    ids: res.ids ?? [],
    documents: res.documents ?? [],
    metadatas: res.metadatas ?? [],
    distances: res.distances ?? [],
  };
}

export async function deleteFromChroma(id: string) {
  const col = await getCollection();
  await col.delete({
    ids: [id],
  });
}

export async function deleteMultipleFromChroma(ids: string[]) {
  if (ids.length === 0) return;
  const col = await getCollection();
  await col.delete({
    ids,
  });
}

"use client";

import { useEffect, useMemo, useState } from "react";

type Note = {
  id: string;
  createdAt: string;
  text: string;
};

type TaskStatus = "pending" | "completed" | "skipped" | "cancelled";

const STORAGE_KEY = "tasks-today-status-v1";

function loadTaskStatus(): Record<string, TaskStatus> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? (parsed as Record<string, TaskStatus>) : {};
  } catch {
    return {};
  }
}

export function TasksToday() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [taskStatus, setTaskStatus] = useState<Record<string, TaskStatus>>({});

  useEffect(() => {
    const loadNotes = async () => {
      const res = await fetch("/api/notes");
      const data = (await res.json()) as { notes?: Note[] };
      setNotes(Array.isArray(data.notes) ? data.notes : []);
    };

    loadNotes().catch(() => {});
    setTaskStatus(loadTaskStatus());

    const handleNotesUpdated = () => {
      loadNotes().catch(() => {});
    };

    window.addEventListener("notes:updated", handleNotesUpdated);
    return () => window.removeEventListener("notes:updated", handleNotesUpdated);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(taskStatus));
    } catch {
      /* ignore */
    }
  }, [taskStatus]);

  const tasks = useMemo(() => {
    return notes.slice(0, 5).map((note) => ({
      ...note,
      status: (taskStatus[note.id] ?? "pending") as TaskStatus,
    }));
  }, [notes, taskStatus]);

  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const updateStatus = (id: string, status: TaskStatus) => {
    setTaskStatus((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <section className="rounded-2xl border border-blue-100/90 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-950">Tasks Today</h2>
          {tasks.length > 0 && (
            <span className="text-xs font-medium text-slate-500">
              {completedCount} of {tasks.length} done
            </span>
          )}
        </div>
        {tasks.length > 0 && (
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {tasks.length === 0 ? (
        <p className="text-sm text-slate-600">Add a note to create a task for today</p>
      ) : pendingTasks.length === 0 ? (
        <p className="text-sm text-slate-600">All tasks complete for today! 🎉</p>
      ) : (
        <ul className="space-y-3">
          {pendingTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-sm"
            >
              <div className="mt-0.5 flex-1 min-w-0">
                <p className="text-slate-900 leading-relaxed">{task.text}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {new Date(task.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "completed")}
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 transition-colors hover:bg-emerald-100 active:bg-emerald-200"
                  title="Mark as completed"
                >
                  ✓
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "skipped")}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-700 transition-colors hover:bg-amber-100 active:bg-amber-200"
                  title="Skip this task"
                >
                  ⊘
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "cancelled")}
                  className="rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-medium text-red-700 transition-colors hover:bg-red-100 active:bg-red-200"
                  title="Cancel this task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > pendingTasks.length && (
        <div className="mt-4 border-t border-slate-200 pt-4">
          <details className="cursor-pointer">
            <summary className="text-xs font-medium text-slate-500 hover:text-slate-700">
              {tasks.length - pendingTasks.length} skipped or cancelled
            </summary>
            <ul className="mt-2 space-y-2">
              {tasks
                .filter((t) => t.status !== "pending")
                .map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center gap-2 rounded-lg border border-slate-200/50 bg-slate-50/50 p-2 text-xs"
                  >
                    <span
                      className={
                        task.status === "completed"
                          ? "text-emerald-600"
                          : task.status === "skipped"
                            ? "text-amber-600"
                            : "text-red-600"
                      }
                    >
                      {task.status === "completed" ? "✓" : task.status === "skipped" ? "⊘" : "✕"}
                    </span>
                    <p className="flex-1 text-slate-700">{task.text}</p>
                    <button
                      type="button"
                      onClick={() => updateStatus(task.id, "pending")}
                      className="text-[10px] font-medium text-slate-500 hover:text-slate-700"
                    >
                      undo
                    </button>
                  </li>
                ))}
            </ul>
          </details>
        </div>
      )}
    </section>
  );
}

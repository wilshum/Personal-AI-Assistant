"use client";

import { useEffect, useMemo, useState } from "react";

type Note = {
  id: string;
  createdAt: string;
  text: string;
};

type TaskStatus = "pending" | "completed" | "skipped" | "cancelled";

const STORAGE_KEY = "tasks-tomorrow-status-v1";
const TODAY_STORAGE_KEY = "tasks-today-status-v1";

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

function loadTodayStatus(): Record<string, TaskStatus> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(TODAY_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? (parsed as Record<string, TaskStatus>) : {};
  } catch {
    return {};
  }
}

export function TasksTomorrow() {
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
    const todayStatus = loadTodayStatus();
    
    // Get tasks from tomorrow's planned items (5-9)
    const tomorrowPlanned = notes.slice(5, 10);
    
    // Get skipped tasks from today (0-4)
    const todayTasks = notes.slice(0, 5);
    const skippedFromToday = todayTasks.filter((note) => todayStatus[note.id] === "skipped");
    
    // Combine: skipped from today first, then tomorrow's planned items
    const combined = [...skippedFromToday, ...tomorrowPlanned];
    
    return combined.map((note) => ({
      ...note,
      status: (taskStatus[note.id] ?? "pending") as TaskStatus,
    }));
  }, [notes, taskStatus]);

  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const updateStatus = (id: string, status: TaskStatus) => {
    setTaskStatus((prev) => ({ ...prev, [id]: status }));
  };

  const taskHint =
    tasks.length === 0
      ? "Add more notes or skip today's tasks to fill tomorrow's list."
      : "Skipped tasks from today appear here first.";

  return (
    <section className="min-h-[170px] rounded-2xl border border-blue-100/90 bg-gradient-to-br from-slate-50/50 to-blue-50/30 p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Tasks Tomorrow</h2>
            <p className="mt-1 text-xs text-slate-500">{taskHint}</p>
          </div>
          {tasks.length > 0 && (
            <span className="text-xs font-medium text-slate-500">
              {completedCount} of {tasks.length} done
            </span>
          )}
        </div>
        {tasks.length > 0 && (
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-gradient-to-r from-slate-300 to-slate-400 transition-all duration-300"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-6 text-sm text-slate-600 shadow-sm">
          No tasks planned for tomorrow yet.
        </div>
      ) : pendingTasks.length === 0 ? (
        <p className="text-sm text-slate-600">All tasks complete for tomorrow! 🎉</p>
      ) : (
        <ul className="space-y-2">
          {pendingTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/70 p-3 text-sm"
            >
              <div className="mt-0.5 flex-1 min-w-0">
                <p className="text-slate-900 leading-relaxed">{task.text}</p>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "completed")}
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
                  title="Mark as completed"
                >
                  ✓
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "skipped")}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-700 transition-colors hover:bg-amber-100"
                  title="Skip this task"
                >
                  ⊘
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus(task.id, "cancelled")}
                  className="rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-medium text-red-700 transition-colors hover:bg-red-100"
                  title="Cancel this task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

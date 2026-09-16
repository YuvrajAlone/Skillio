import { Code2Icon, LoaderIcon, PlusIcon, SearchIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { useState } from "react";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isProblemListOpen, setIsProblemListOpen] = useState(false);

  const filteredProblems = problems.filter((problem) =>
    problem.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-6 text-accent">Create Session</h3>

        <div className="space-y-8">
          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold text-white/70">
                Select Problem
              </span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <div className="relative">
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-white/60 z-10" />
              <input
                type="text"
                className="input w-full pr-10 border-white/30! outline-none! shadow-none! focus:border-white/30! focus:outline-none! focus:shadow-none! text-white/70 placeholder:text-white/40"
                placeholder="Search coding problem..."
                value={searchTerm}
                onChange={(e) => {
                  const value = e.target.value;

                  setSearchTerm(value);
                  setIsProblemListOpen(value.length > 0);
                }}
              />

              {isProblemListOpen && (
                <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto rounded-lg border border-white/20 bg-base-100 shadow-lg">
                  {filteredProblems.length > 0 ? (
                    filteredProblems.map((problem) => (
                      <button
                        key={problem.id}
                        type="button"
                        className="w-full text-left px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white border-0"
                        onClick={() => {
                          const selectedProblem = problems.find(
                            (p) => p.title === problem.title,
                          );

                          setRoomConfig({
                            difficulty: selectedProblem.difficulty,
                            problem: problem.title,
                          });

                          setSearchTerm(problem.title);
                          setIsProblemListOpen(false);
                        }}
                      >
                        {problem.title}
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-3 opacity-60 text-white/70">
                      No problems found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-base-200 to-base-200 p-5">
              {/* subtle glow */}
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                  <Code2Icon className="size-5 text-blue-400" />
                </div>

                <div className="flex-1">
                  {/* Heading */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Room Summary
                  </p>

                  {/* Problem */}
                  <div className="mt-2">
                    <p className="text-sm text-white/50">Problem:</p>
                    <p className="text-lg font-semibold text-white">
                      {roomConfig.problem}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-3 h-px bg-white/10" />

                  {/* Participants */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/40">
                      (1-on-1 session)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost text-white/70 " onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn bg-blue-500/20 hover:bg-blue-500/30 text-white/70 gap-2 disabled:bg-gray-100/5 disabled:text-white/50"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
export default CreateSessionModal;

import { useState, useRef, useEffect } from "react";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProblems = allProblems.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full overflow-y-auto bg-base-100">
      {/* HEADER SECTION */}
      <div className="p-5 pb-0 bg-base-100">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-3xl font-bold text-[#1e3a66]">{problem.title}</h1>
        </div>
        <p className="text-white/70">{problem.category}</p>
        {/* Problem selector */}
        <div ref={dropdownRef} className="mt-4 relative">
          {/* Search / Selected problem */}
          <input
            type="text"
            placeholder="Search problems..."
            value={
              isOpen
                ? search
                : allProblems.find((p) => p.id === currentProblemId)?.title ||
                  ""
            }
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="input input-sm w-full bg-transparent text-white/70 border-white/50"
          />

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-50 mt-2 w-full rounded-2xl border border-white/10 bg-[#09090b] shadow-xl overflow-hidden">
              <div className="max-h-52 overflow-y-auto p-2 thin-scrollbar">
                {filteredProblems.length > 0 ? (
                  filteredProblems.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onProblemChange(p.id);
                        setSearch("");
                        setIsOpen(false);
                      }}
                      className={`px-4 py-2.5 rounded-lg cursor-pointer text-sm
                hover:bg-white/10 transition-colors
                ${p.id === currentProblemId ? "text-white" : "text-white/70"}`}
                    >
                      {p.id === currentProblemId && (
                        <span className="mr-2">✓</span>
                      )}

                      {p.title}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-white/40">
                    No problems found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* PROBLEM DESC */}
        <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold text-[#264a7a]">Description</h2>
          <div className="space-y-3 leading-relaxed">
            <p className="text-white/70">{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="text-white/70">
                {note}
              </p>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold mb-4 text-[#264a7a]">Examples</h2>
          <div className="space-y-4">
            {problem.examples.map((example, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-semibold text-white/70">
                    Example {idx + 1}
                  </p>
                </div>
                <div className="bg-base-300 rounded-lg p-4 font-mono text-sm space-y-1.5">
                  <div className="flex gap-2">
                    <span className="text-white/70 font-bold min-w-17.5">
                      Input:
                    </span>
                    <span className="text-white/70">{example.input}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/70 font-bold min-w-17.5">
                      Output:
                    </span>
                    <span className="text-white/70">{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div className="pt-2 border-t border-zinc-700 mt-2">
                      <span className="text-white/70 font-sans text-xs">
                        <span className="font-semibold">Explanation:</span>{" "}
                        {example.explanation}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRAINTS */}
        <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
          <h2 className="text-xl font-bold mb-4 text-[#264a7a]">Constraints</h2>
          <ul className="space-y-2 text-base-content/90">
            {problem.constraints.map((constraint, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">•</span>
                <code className="text-sm text-white/70">{constraint}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProblemDescription;

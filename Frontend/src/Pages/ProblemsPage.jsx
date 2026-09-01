import Navbar from "../components/Navbar.jsx";
import { PROBLEMS } from "../data/problems.js";
import { Link } from "react-router";
import { ChevronRightIcon, Code2Icon } from "lucide-react";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-purple-700">
            Practice Problems
          </h1>
          <p className="text-white/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-200 hover:scale-[1.01] transition-transform border border-white/5"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 text-white">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                        </div>
                        <p className="text-sm text-white/50">
                          {" "}
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 mb-3">
                      {problem.description.text}
                    </p>
                  </div>
                  {/* RIGHT SIDE */}

                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="font-medium">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;

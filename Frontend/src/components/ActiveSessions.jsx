import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 card bg-base-100 border-2 border-secondary/60 hover:border-secondary h-full">
      <div className="card-body">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-6">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-secondary to-accent rounded-xl">
              <ZapIcon className="size-5 text-white/70" />
            </div>
            <h2 className="text-2xl font-black text-accent">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="size-2 bg-success/50 rounded-full" />
            <span className="text-sm font-medium text-success/50">
              {sessions.length} active
            </span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-3 max-h-100 overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="size-10 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="card bg-base-200/30 border-2 border-base-200 hover:border-secondary/50"
              >
                <div className="flex items-center justify-between gap-4 p-5">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative size-14 rounded-xl bg-linear-to-br from-accent to-secondary flex items-center justify-center">
                      <Code2Icon className="size-7 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-primary/80 truncate">
                          {session.problem}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 text-sm opacity-80">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-4 text-blue-500/50" />
                          <span className="font-medium text-white/70">
                            {session.host?.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <UsersIcon className="size-4 text-blue-500/50" />
                          <span className="text-xs text-white/70">
                            {session.participant ? "2/2" : "1/2"}
                          </span>
                        </div>
                        {session.participant && !isUserInSession(session) ? (
                          <span className="badge badge-error opacity-50 badge-sm">
                            FULL
                          </span>
                        ) : (
                          <span className="badge badge-success opacity-50 badge-sm">
                            OPEN
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {session.participant && !isUserInSession(session) ? (
                    <button className="btn btn-disabled btn-sm">Full</button>
                  ) : (
                    <Link
                      to={`/session/${session._id}`}
                      className="btn btn-secondary btn-sm gap-2"
                    >
                      {isUserInSession(session) ? "Rejoin" : "Join"}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center">
                <BrainCircuit className="w-10 h-10 text-primary/70" />
              </div>
              <p className="text-lg font-semibold text-blue-600/50 opacity-70 mb-1">
                No active sessions
              </p>
              <p className="text-sm opacity-70 text-white/70">
                Be the first to create one!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActiveSessions;

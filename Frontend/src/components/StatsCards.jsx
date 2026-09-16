import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
      {/* Active Count */}
      <div className="card bg-base-100 border-2 border-secondary/60 hover:border-secondary">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-secondary/20 rounded-2xl">
              <UsersIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="badge badge-secondary">Live</div>
          </div>
          <div className="text-4xl text-white mb-1">{activeSessionsCount}</div>
          <div className="text-sm opacity-60 text-white/70">
            Active Sessions
          </div>
        </div>
      </div>

      {/* Recent Count */}
      <div className="card bg-base-100 border-2 border-secondary/60 hover:border-secondary">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-secondary/20 rounded-2xl">
              <TrophyIcon className="w-7 h-7 text-primary" />
            </div>
          </div>
          <div className="text-4xl text-white mb-1">{recentSessionsCount}</div>
          <div className="text-sm opacity-60 text-white/70">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;

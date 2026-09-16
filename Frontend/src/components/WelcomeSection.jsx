import { useUser } from "@clerk/react";
import { ArrowRightIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-5xl pb-1 leading-tight font-black bg-linear-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Welcome {user?.firstName || "there"}!
              </h1>
            </div>
          </div>
          <button
            onClick={onCreateSession}
            className="group px-8 py-4 bg-linear-to-r from-secondary rounded-2xl transition-all duration-200 hover:opacity-90"
          >
            <div className="flex items-center gap-3 text-white font-bold text-lg">
              <ZapIcon className="w-6 h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;

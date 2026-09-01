import { Link } from "react-router";
import {
  ArrowRightIcon,
  BrainCircuit,
  CheckIcon,
  VideoIcon,
  Code2Icon,
  UsersIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/react";

function HomePage() {
  return (
    <div className="bg-base-100">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-primary/20">
        <div className="min-w-xl mx-auto p-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to={"/"}
            className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-200"
          >
            <div className="">
              <BrainCircuit className="size-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl bg-linear-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent ">
                Skillio
              </span>
            </div>
          </Link>
          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-linear-to-r from-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>
      {/* INFO SECTION */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black ml-4 leading-tight">
              <span className="block bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                Practice,
              </span>

              <span className="block bg-linear-to-r from-white/70 via-white/40 to-white/10 bg-clip-text text-transparent">
                Prepare,
              </span>

              <span className="block bg-linear-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent">
                Perform
              </span>
            </h1>

            <p className=" leading-relaxed max-w-xl ml-4 text-white">
              Collaborate, code, and grow with Skillio. Practice real-world
              interviews, solve problems together, and build the confidence to
              land your next opportunity.
            </p>
            {/* FEATURE PILLS */}
            <div className="flex flex-wrap  gap-3  ml-4">
              <div className="badge badge-lg badge-outline border-secondary text-white">
                <CheckIcon className="size-4 text-success" />
                Live Video Chat
              </div>

              <div className="badge badge-lg badge-outline border-secondary text-white">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>

              <div className="badge badge-lg badge-outline border-secondary text-white">
                <CheckIcon className="size-4 text-success" />
                Multi-Language
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap  gap-4 mt-5  ml-4">
              <SignInButton mode="modal">
                <button className="group px-6 py-3 bg-linear-to-r from-secondary  to-accent rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 ">
                  Start Coding Now
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>
            </div>
            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-200 shadow-lg py-5  ml-4">
              <div className="stat">
                <div className="stat-value text-primary">10K+</div>
                <div className="stat-title text-white">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">50K+</div>
                <div className="stat-title text-white">Problems</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">99.9%</div>
                <div className="stat-title text-white">Uptime</div>
              </div>
            </div>
          </div>
          {/* RIGHT IMAGE */}
          <img
            src="/desktop.png"
            alt="CodeCollab Platform"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-200 hover:scale-105 transition-transform duration-500 -ml-4"
          />
        </div>
      </div>
      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-secondary font-mono">Succeed</span>
          </h2>
          <p className="text-lg  max-w-2xl mx-auto text-white">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>
        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-green-500" />
              </div>
              <h3 className="card-title text-white">HD Video Call</h3>
              <p className="text-white">
                Crystal clear video and audio for seamless communication during
                interviews
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-yellow-300" />
              </div>
              <h3 className="card-title text-white">Live Code Editor</h3>
              <p className=" text-white">
                Collaborate in real-time with syntax highlighting and multiple
                language support
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-blue-600" />
              </div>
              <h3 className="card-title text-white">Easy Collaboration</h3>
              <p className=" text-white">
                Share your screen, discuss solutions, and learn from each other
                in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

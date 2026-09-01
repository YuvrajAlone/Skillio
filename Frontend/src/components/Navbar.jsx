import { Link, useLocation } from "react-router";
import { LibraryBig, LayoutDashboardIcon, BrainCircuit } from "lucide-react";
import { UserButton } from "@clerk/react";

function Navbar() {
  const location = useLocation();

  console.log(location);

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="bg-base-100 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="min-w-xl mx-auto p-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-2 hover:scale-105 transition-transform duration-200"
        >
          <div>
            <BrainCircuit className="size-6 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="font-black text-xl bg-linear-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">
              Skillio
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {/* PROBLEMS PAGE LINK */}
          <Link
            to={"/problems"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 
              ${
                isActive("/problems")
                  ? "bg-blue-950 text-white"
                  : "hover:bg-base-200 text-white hover:text-gray-500"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2.5">
              <LibraryBig className="size-4" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </Link>

          {/* DASHBORD PAGE LINK */}
          <Link
            to={"/dashboard"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 
              ${
                isActive("/dashboard")
                  ? "bg-blue-950 text-white"
                  : "hover:bg-base-200 text-white hover:text-gray-500"
              }
              
              `}
          >
            <div className="flex items-center gap-x-2.5">
              <LayoutDashboardIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Dashbord</span>
            </div>
          </Link>

          <div className="ml-4 mt-2">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useAuth } from "../hooks/useAuth";
import { BellIcon } from "./icons/BellIcon";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/60 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-textSoft/60">
            EduAuth Console
          </p>
          <p className="font-heading text-sm text-textSoft">
            Unified Academic Integrity Platform
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-textSoft/70 hover:text-aquaHighlight hover:border-aquaHighlight/60 hover:bg-aquaHighlight/5 transition">
            <BellIcon className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-electricBlue to-cyberPurple text-[9px] font-semibold text-white">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-textSoft">
                {user?.email ?? "Guest"}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-aquaHighlight">
                {user?.role ?? "Unauthenticated"}
              </span>
            </div>
            <button
              onClick={logout}
              className="text-[11px] font-medium text-textSoft/70 hover:text-aquaHighlight transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


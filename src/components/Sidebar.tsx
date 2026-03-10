import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Overview" },
  { to: "/attendance", label: "Attendance" },
  { to: "/verify-certificate", label: "Certificates" },
  { to: "/plagiarism-check", label: "Submissions" },
  { to: "/dashboard#reports", label: "Reports" },
  { to: "/proctoring", label: "Alerts" },
  { to: "/dashboard#erp", label: "ERP Sync" },
  { to: "/student-portfolio", label: "Student Portfolio" }
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 flex-col border-r border-white/5 bg-black/80 backdrop-blur-2xl">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
        <div className="relative h-9 w-9 rounded-2xl bg-animated-gradient shadow-neon-soft">
          <div className="absolute inset-[3px] rounded-2xl bg-black/80 backdrop-blur-xl" />
          <span className="relative z-10 flex h-full w-full items-center justify-center font-heading text-xs text-aquaHighlight">
            EA
          </span>
        </div>
        <div>
          <p className="font-heading text-sm text-textSoft">EduAuth</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-textSoft/60">
            Integrity Engine
          </p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "group flex items-center rounded-2xl px-3 py-2 text-sm font-medium transition",
                "border border-transparent",
                "hover:border-aquaHighlight/40 hover:bg-aquaHighlight/5",
                isActive
                  ? "bg-gradient-to-r from-electricBlue/30 via-cyberPurple/30 to-transparent border-aquaHighlight/70 text-aquaHighlight"
                  : "text-textSoft/70"
              ].join(" ")
            }
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-aquaHighlight/60 group-hover:bg-aquaHighlight" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 pb-4">
        <div className="glass-panel px-3 py-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-textSoft/60">
            Live Chain Status
          </p>
          <p className="mt-2 text-xs text-textSoft">
            95% logs synced to multi-chain ledger.
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/5">
            <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple shadow-neon-soft" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


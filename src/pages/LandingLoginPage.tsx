import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useToaster } from "../components/ToasterProvider";

const LandingLoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { pushToast } = useToaster();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "recruiter" | "admin">("admin");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      login({ email, role });
      pushToast({
        variant: "success",
        message: (
          <span>
            Logged in as <strong>{role}</strong>. Demo session activated.
          </span>
        )
      });
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
      <section className="space-y-6 text-left">
        <span className="inline-flex items-center rounded-full border border-aquaHighlight/40 bg-aquaHighlight/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-aquaHighlight shadow-[0_0_24px_rgba(76,201,240,0.5)]">
          Agentic AI • Blockchain • Edu
        </span>
        <div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-textSoft leading-tight">
            Empowering Academic Integrity
            <span className="block bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple bg-clip-text text-transparent">
              through Agentic AI.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-textSoft/70">
            EduAuth unifies attendance, credential verification, plagiarism
            detection, and behavioral proctoring into a single integrity
            operating system for universities and recruiters.
          </p>
        </div>

        <div className="mt-4 grid gap-4 text-xs text-textSoft/70 sm:grid-cols-3">
          <div className="glass-panel p-3.5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aquaHighlight/80">
              University Nodes
            </p>
            <p className="mt-1 font-heading text-xl text-textSoft">142</p>
            <p className="mt-1 text-[11px] text-textSoft/60">
              Connected to multi-chain EduAuth ledger.
            </p>
          </div>
          <div className="glass-panel p-3.5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aquaHighlight/80">
              Verified Credentials
            </p>
            <p className="mt-1 font-heading text-xl text-textSoft">1.2M+</p>
            <p className="mt-1 text-[11px] text-textSoft/60">
              AI-signed and tamper-evident.
            </p>
          </div>
          <div className="glass-panel p-3.5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aquaHighlight/80">
              Integrity Index
            </p>
            <p className="mt-1 font-heading text-xl text-textSoft">92.4%</p>
            <p className="mt-1 text-[11px] text-textSoft/60">
              Live anomaly and misconduct scoring.
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="pointer-events-none absolute -inset-10 rounded-[2.4rem] bg-gradient-to-tr from-aquaHighlight/25 via-electricBlue/25 to-cyberPurple/25 opacity-60 blur-3xl" />
        <div className="glass-panel relative z-10 px-6 py-6 sm:px-8 sm:py-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-textSoft/60">
                Log in to EduAuth
              </p>
              <p className="mt-1 text-sm text-textSoft/80">
                Choose a role to explore the demo console.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="text-[11px] font-medium text-aquaHighlight hover:text-electricBlue"
            >
              Skip to Demo →
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-textSoft/70">Email</label>
              <input
                className="neo-input w-full"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-textSoft/70">Password</label>
              <input
                className="neo-input w-full"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-textSoft/70">Role</label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {["student", "recruiter", "admin"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() =>
                      setRole(r as "student" | "recruiter" | "admin")
                    }
                    className={`rounded-xl border px-3 py-2 capitalize transition ${
                      role === r
                        ? "border-aquaHighlight bg-aquaHighlight/20 text-aquaHighlight shadow-[0_0_24px_rgba(76,201,240,0.5)]"
                        : "border-white/10 bg-white/5 text-textSoft/70 hover:border-aquaHighlight/40 hover:bg-aquaHighlight/5"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="neo-btn-primary w-full mt-2 disabled:opacity-70 disabled:cursor-wait"
              disabled={isLoading}
            >
              {isLoading ? "Securing Session..." : "Login"}
            </button>

            <button
              type="button"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-textSoft/80 hover:border-aquaHighlight/40 hover:bg-aquaHighlight/5 transition"
            >
              Register University Node
            </button>

            <p className="pt-2 text-[10px] text-textSoft/60">
              By continuing, you agree to simulated storage of your session in
              local storage for this hackathon demo.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingLoginPage;


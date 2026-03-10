import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full holographic-orb blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-animated-gradient blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-grid-glow bg-[length:32px_32px] opacity-[0.22] mix-blend-soft-light" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;


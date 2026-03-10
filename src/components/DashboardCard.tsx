import { ReactNode } from "react";

type Props = {
  title: string;
  value?: string;
  subtitle?: string;
  accent?: ReactNode;
  children?: ReactNode;
};

const DashboardCard = ({ title, value, subtitle, accent, children }: Props) => {
  return (
    <section className="glass-panel relative overflow-hidden p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-px rounded-3xl border border-white/5" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
            {title}
          </p>
          {value && (
            <p className="mt-1 font-heading text-xl sm:text-2xl text-textSoft">
              {value}
            </p>
          )}
          {subtitle && (
            <p className="mt-1 text-xs text-textSoft/70">{subtitle}</p>
          )}
        </div>
        {accent}
      </div>
      {children && <div className="relative mt-4">{children}</div>}
    </section>
  );
};

export default DashboardCard;


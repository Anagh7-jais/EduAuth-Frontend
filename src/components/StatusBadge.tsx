import { ReactNode } from "react";

type Props = {
  variant?: "success" | "warning" | "danger" | "info";
  children: ReactNode;
};

const variantStyles: Record<Props["variant"], string> = {
  success:
    "bg-emerald-500/10 border-emerald-400/40 text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.45)]",
  warning:
    "bg-amber-500/10 border-amber-400/40 text-amber-100 shadow-[0_0_18px_rgba(245,158,11,0.45)]",
  danger:
    "bg-rose-500/10 border-rose-500/50 text-rose-100 shadow-[0_0_20px_rgba(244,63,94,0.6)]",
  info: "bg-aquaHighlight/10 border-aquaHighlight/50 text-aquaHighlight"
};

const StatusBadge = ({ variant = "info", children }: Props) => {
  return (
    <span className={`neo-badge ${variantStyles[variant]} gap-1`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_12px_currentColor]" />
      <span>{children}</span>
    </span>
  );
};

export default StatusBadge;


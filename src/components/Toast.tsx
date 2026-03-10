import { ReactNode, useEffect } from "react";

type Props = {
  id: string;
  message: ReactNode;
  variant?: "success" | "error" | "info";
  onClose: (id: string) => void;
  duration?: number;
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  success:
    "border-emerald-400/60 bg-emerald-500/10 text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.45)]",
  error:
    "border-rose-500/70 bg-rose-500/10 text-rose-100 shadow-[0_0_22px_rgba(244,63,94,0.7)]",
  info: "border-aquaHighlight/60 bg-aquaHighlight/10 text-aquaHighlight shadow-[0_0_18px_rgba(76,201,240,0.6)]"
};

const Toast = ({
  id,
  message,
  variant = "info",
  onClose,
  duration = 3500
}: Props) => {
  useEffect(() => {
    const handle = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(handle);
  }, [duration, id, onClose]);

  return (
    <div
      className={`glass-panel border-l-4 px-4 py-3 text-sm ${variantClasses[variant]}`}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_16px_currentColor]" />
        <div className="flex-1">{message}</div>
        <button
          className="ml-2 text-xs text-textSoft/60 hover:text-textSoft"
          onClick={() => onClose(id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;


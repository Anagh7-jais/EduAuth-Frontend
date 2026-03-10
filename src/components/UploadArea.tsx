import { ReactNode } from "react";

type Props = {
  label: string;
  onFakeUpload?: () => void;
  hint?: string;
  icon?: ReactNode;
};

const UploadArea = ({ label, onFakeUpload, hint, icon }: Props) => {
  return (
    <button
      type="button"
      onClick={onFakeUpload}
      className="group flex h-52 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-aquaHighlight/40 bg-white/5 text-center text-sm text-textSoft/70 transition hover:border-aquaHighlight hover:bg-aquaHighlight/5"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-aquaHighlight/10 text-aquaHighlight shadow-[0_0_24px_rgba(76,201,240,0.4)]">
        {icon ?? <span className="text-xl">⬆️</span>}
      </div>
      <p className="font-medium text-textSoft">{label}</p>
      {hint && (
        <p className="mt-1 max-w-xs text-xs text-textSoft/60">{hint}</p>
      )}
      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-aquaHighlight/70">
        Drag & Drop • Click to Simulate
      </p>
    </button>
  );
};

export default UploadArea;


import { createContext, PropsWithChildren, useContext, useState } from "react";
import Toast from "./Toast";

type ToastItem = {
  id: string;
  message: React.ReactNode;
  variant?: "success" | "error" | "info";
};

type ToastContextValue = {
  pushToast: (toast: Omit<ToastItem, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToasterProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<ToastItem[]>([]);

  const pushToast: ToastContextValue["pushToast"] = (toast) => {
    const id = crypto.randomUUID();
    setItems((prev) => [...prev, { id, ...toast }]);
  };

  const handleClose = (id: string) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ pushToast }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:px-6">
        {items.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto w-full max-w-sm animate-[slideDown_0.2s_ease-out]"
          >
            <Toast
              id={toast.id}
              message={toast.message}
              variant={toast.variant}
              onClose={handleClose}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToaster = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToaster must be used within ToasterProvider");
  }
  return ctx;
};


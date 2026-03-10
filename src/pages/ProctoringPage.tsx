import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { api } from "../services/mockApi";
import { useToaster } from "../components/ToasterProvider";
import { useNavigate } from "react-router-dom";

type Snapshot = Awaited<ReturnType<typeof api.getProctoringSnapshot>>;

const ProctoringPage = () => {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const { pushToast } = useToaster();
  const navigate = useNavigate();

  useEffect(() => {
    api.getProctoringSnapshot().then((data) => {
      setSnapshot(data);
      if (data.alerts[0]) {
        pushToast({
          variant: "error",
          message: data.alerts[0].message
        });
      }
    });
  }, [pushToast]);

  const suspicionScore = snapshot?.suspicionScore ?? 62;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            Behavioral Proctoring
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Real-time webcam monitoring with AI-driven behavioral analysis and
            suspicion scoring.
          </p>
        </div>
        <StatusBadge variant="danger">
          Multiple faces detected 🚨 • Suspicion score {suspicionScore}/100
        </StatusBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
        <DashboardCard
          title="Webcam Monitoring"
          subtitle="Simulated exam feed with anomaly hints."
        >
          <div className="relative h-64 rounded-3xl border border-rose-500/40 bg-black/70 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4CC9F0AA,transparent_60%),radial-gradient(circle_at_80%_80%,#FF003355,transparent_55%)] opacity-70" />
            <div className="absolute inset-3 rounded-3xl border border-white/15" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between text-xs">
              <StatusBadge variant="danger">
                Live anomaly scan • Exam #391
              </StatusBadge>
              <span className="rounded-full bg-black/70 px-2 py-1 text-[10px] text-textSoft/70">
                00:42:18 elapsed
              </span>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs">
              <p className="rounded-full bg-black/70 px-2 py-1 text-rose-100">
                “Multiple faces detected 🚨” • “Gaze off-screen & window focus
                loss”
              </p>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="neo-btn-primary px-3 py-1.5 text-xs"
              >
                View Alert in Dashboard
              </button>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Suspicion Score"
          subtitle="Aggregate behavioral risk scoring."
        >
          <div className="space-y-4 pt-2 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500"
                  style={{ width: `${suspicionScore}%` }}
                />
              </div>
              <p className="font-heading text-xl text-rose-100">
                {suspicionScore}
                <span className="text-xs text-textSoft/70"> / 100</span>
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-textSoft/70">
                  Multiple faces detected
                </span>
                <StatusBadge variant="danger">High</StatusBadge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-textSoft/70">
                  Gaze away from screen & window focus loss
                </span>
                <StatusBadge variant="warning">Medium</StatusBadge>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-textSoft/70">Keyboard noise spikes</span>
                <StatusBadge variant="info">Low</StatusBadge>
              </li>
            </ul>
          </div>
        </DashboardCard>
      </div>

      <DashboardCard
        title="Alert Stream"
        subtitle="Events are streamed to the Admin Dashboard and can be exported with evidence."
      >
        <div className="space-y-2 text-xs">
          {snapshot?.alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div>
                <p className="text-textSoft/80">{alert.message}</p>
                <p className="text-[11px] text-textSoft/60">
                  {new Date(alert.timestamp).toLocaleTimeString()} • ID{" "}
                  {alert.id}
                </p>
              </div>
              <StatusBadge
                variant={
                  alert.severity === "high"
                    ? "danger"
                    : alert.severity === "medium"
                    ? "warning"
                    : "info"
                }
              >
                {alert.severity.toUpperCase()}
              </StatusBadge>
            </div>
          )) ?? (
            <p className="text-textSoft/60">
              Loading latest proctoring alerts…
            </p>
          )}
        </div>
      </DashboardCard>
    </div>
  );
};

export default ProctoringPage;


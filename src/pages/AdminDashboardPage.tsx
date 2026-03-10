import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { api } from "../services/mockApi";

type DashboardSummary = Awaited<ReturnType<typeof api.getDashboardSummary>>;

const AdminDashboardPage = () => {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getDashboardSummary()
      .then(setSummary)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            Admin Command Center
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Real-time overview of academic integrity across attendance,
            submissions, and credentials.
          </p>
        </div>
        <StatusBadge variant="info">
          Node: NovaTech University • Chain: EduAuth L2
        </StatusBadge>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <DashboardCard
          title="Integrity Index"
          value={
            isLoading || !summary
              ? "•••"
              : `${summary.integrityIndex.toFixed(1)}%`
          }
          subtitle="Composite score across all active modules."
          accent={
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-emerald-400/40 to-aquaHighlight/30 shadow-neon-soft" />
          }
        />
        <DashboardCard
          title="Originality Score"
          value={
            isLoading || !summary
              ? "•••"
              : `${summary.originalityScore.toFixed(1)}%`
          }
          subtitle="Blended AI-written and source overlap detection."
          accent={
            <div className="relative h-10 w-10 rounded-full border border-aquaHighlight/40">
              <div className="absolute inset-1 rounded-full border-[3px] border-transparent border-t-aquaHighlight border-r-electricBlue animate-spin-slow" />
            </div>
          }
        />
        <DashboardCard
          title="Blockchain Verified Logs"
          value={
            isLoading || !summary
              ? "•••"
              : `${Math.round(summary.blockchainLogsVerified * 100)}%`
          }
          subtitle="Attendance, credentials, and exam events anchored."
        >
          <div className="h-1.5 w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple"
              style={{
                width: summary
                  ? `${summary.blockchainLogsVerified * 100}%`
                  : "60%"
              }}
            />
          </div>
        </DashboardCard>
        <DashboardCard
          title="ERP Sync"
          value={summary?.erpConnected ? "Connected" : "Degraded"}
          subtitle="Live push to campus ERP & SIS."
          accent={
            <StatusBadge
              variant={summary?.erpConnected ? "success" : "warning"}
            >
              {summary?.erpConnected ? "Healthy" : "Sync lag • 4 mins"}
            </StatusBadge>
          }
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section
          id="reports"
          className="glass-panel relative overflow-hidden p-4 sm:p-5"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
                Academic Integrity Trend
              </p>
              <p className="mt-1 text-xs text-textSoft/70">
                Year-on-year change across all cohorts.
              </p>
            </div>
            <StatusBadge variant="success">Upward trajectory</StatusBadge>
          </div>

          <div className="mt-4 flex h-48 items-end gap-2 sm:gap-4">
            {summary?.integrityTrend.map((point) => (
              <div key={point.label} className="flex-1 space-y-1">
                <div className="glass-panel relative flex h-32 items-end overflow-hidden">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-electricBlue/10 via-aquaHighlight/80 to-cyberPurple/90 shadow-neon-soft"
                    style={{ height: `${point.value}%` }}
                  />
                </div>
                <p className="text-center text-xs text-textSoft/70">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
                Verification Activity
              </p>
              <p className="mt-1 text-xs text-textSoft/70">
                Credential checks by recruiters this week.
              </p>
            </div>
            <StatusBadge variant="info">Live stream</StatusBadge>
          </div>

          <div className="mt-4 space-y-3">
            {summary?.verificationActivity.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs text-textSoft/60">
                  <span>{item.label}</span>
                  <span>{item.value} verifications</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple"
                    style={{ width: `${(item.value / 70) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="glass-panel p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
              Recent AI Alerts
            </p>
            <p className="mt-1 text-xs text-textSoft/70">
              Behavioral anomalies and credential mismatches.
            </p>
          </div>
          <StatusBadge variant="warning">Monitoring</StatusBadge>
        </div>

        <div className="mt-3 space-y-2 text-sm">
          {summary?.recentAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <p className="text-textSoft/80">{alert.message}</p>
              <span className="text-[11px] text-textSoft/55">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </span>
            </div>
          )) ?? (
            <p className="text-xs text-textSoft/60">Loading alerts…</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;


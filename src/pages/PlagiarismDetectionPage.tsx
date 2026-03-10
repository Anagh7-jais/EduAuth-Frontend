import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { api } from "../services/mockApi";
import { useEffect, useState } from "react";

type Result = Awaited<ReturnType<typeof api.getPlagiarismResult>>;

const PlagiarismDetectionPage = () => {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    api.getPlagiarismResult().then(setResult);
  }, []);

  const originality = result?.originalityIndex ?? 84;
  const aiShare = result?.aiGeneratedPortion ?? 16;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            AI Plagiarism Detection
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Side-by-side comparison of student submission and detected source
            material with AI-generated content estimation.
          </p>
        </div>
        <StatusBadge variant="info">
          Originality Index: {originality}% • AI content: {aiShare}%
        </StatusBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <DashboardCard
          title="Submission vs. Source"
          subtitle="Highlighted overlap segments and narrative analysis."
        >
          <div className="grid gap-3 md:grid-cols-2 text-xs">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
                Student Submission
              </p>
              <div className="h-64 overflow-y-auto rounded-2xl border border-white/10 bg-black/70 p-3 leading-relaxed">
                <p className="text-textSoft/80">
                  EduAuth proposes an{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    AI-driven network of autonomous integrity agents
                  </span>{" "}
                  that coordinate attendance tracking, plagiarism analysis, and
                  certificate verification in real time. Each assessment
                  artifact is transformed into a cryptographic fingerprint and
                  <span className="bg-rose-500/25 text-rose-100">
                    anchored to a multi-chain ledger
                  </span>
                  , making tampering or backdated issuance economically
                  infeasible. Recruiters query this ledger through a{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    zero-knowledge proof interface
                  </span>{" "}
                  that confirms authenticity without revealing sensitive
                  student-level metadata.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
                Source Document
              </p>
              <div className="h-64 overflow-y-auto rounded-2xl border border-white/10 bg-black/70 p-3 leading-relaxed">
                <p className="text-textSoft/80">
                  Our reference design introduces{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    autonomous AI agents that synchronize integrity checks
                  </span>{" "}
                  across attendance, submissions, and credential ledgers. Every
                  credential hash is{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    anchored to a permissioned blockchain
                  </span>{" "}
                  so that{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    credential backdating is effectively impossible
                  </span>
                  . Third-party verifiers interact with the system via{" "}
                  <span className="bg-rose-500/25 text-rose-100">
                    zero-knowledge proof circuits
                  </span>
                  , preserving student privacy while exposing proof of
                  integrity.
                </p>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Originality Meter"
          subtitle="Circular gauge with AI-generated content tooltip."
          accent={<StatusBadge variant="warning">Review Recommended</StatusBadge>}
        >
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-3 rounded-full border border-aquaHighlight/30" />
              <div className="absolute inset-5 rounded-full bg-black/80" />
              <div
                className="absolute inset-1.5 rounded-full border-[6px] border-t-aquaHighlight border-r-electricBlue border-b-cyberPurple border-l-transparent"
                style={{
                  opacity: 0.8,
                  transform: `rotate(${(originality / 100) * 220 - 110}deg)`,
                  transformOrigin: "center"
                }}
              />
              <div className="absolute inset-10 flex flex-col items-center justify-center text-center">
                <p className="text-[11px] text-textSoft/60">
                  Originality Index
                </p>
                <p className="font-heading text-3xl text-textSoft">
                  {originality}%
                </p>
                <p className="mt-1 text-[11px] text-textSoft/60">
                  Detected {aiShare}% AI-generated content
                </p>
              </div>
            </div>
            <p className="max-w-xs text-[11px] text-textSoft/65 text-center">
              <span className="font-semibold text-aquaHighlight">
                Tooltip:
              </span>{" "}
              “Detected {aiShare}% AI-generated content” based on semantic
              similarity, burstiness, and stylometric drift from known writing
              samples.
            </p>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default PlagiarismDetectionPage;


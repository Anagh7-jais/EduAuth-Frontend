import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { api } from "../services/mockApi";

type Student = (typeof import("../services/mockData").mockStudents)[number];

const AttendancePage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isVerifyingFace, setIsVerifyingFace] = useState(false);
  const [hash] = useState("0xA39F...91B2CDE4");

  useEffect(() => {
    api.getStudents().then((data) => setStudents([...data]));
  }, []);

  const presentCount = students.filter((s) => s.status === "present").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            Face-Verified Attendance
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Live biometric verification anchored to blockchain-based attendance
            ledgers.
          </p>
        </div>
        <StatusBadge variant="info">
          {presentCount} / {students.length || "•••"} present
        </StatusBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <DashboardCard
          title="Webcam Verification"
          subtitle="Simulated feed for hackathon demo."
        >
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="relative h-64 rounded-3xl border border-aquaHighlight/30 bg-black/60 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4CC9F0AA,transparent_55%),radial-gradient(circle_at_80%_80%,#7209B7AA,transparent_55%)] opacity-60" />
              <div className="absolute inset-3 rounded-3xl border border-white/15" />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-xs">
                <StatusBadge variant={isVerifyingFace ? "success" : "warning"}>
                  {isVerifyingFace ? "Face Verified" : "Awaiting Face Match"}
                </StatusBadge>
                <button
                  type="button"
                  onClick={() => setIsVerifyingFace((prev) => !prev)}
                  className="neo-btn-primary px-3 py-1.5 text-xs"
                >
                  {isVerifyingFace ? "Stop Scan" : "Start Face Scan"}
                </button>
              </div>
            </div>
            <div className="space-y-3 text-xs">
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSoft/60">
                Detected Students
              </p>
              <div className="max-h-56 space-y-2 overflow-y-auto pr-1">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div>
                      <p className="text-sm text-textSoft">{student.name}</p>
                      <p className="text-[11px] text-textSoft/60">
                        {student.program}
                      </p>
                    </div>
                    <StatusBadge
                      variant={
                        student.status === "present" ? "success" : "danger"
                      }
                    >
                      {student.status === "present" ? "Present" : "Absent"}
                    </StatusBadge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Blockchain Ledger"
          subtitle="Every attendance event has a tamper-evident hash."
        >
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-textSoft/70">
                Attendance Hash Stored on Blockchain:
              </p>
              <p className="mt-1 font-mono text-[11px] text-aquaHighlight">
                {hash}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-textSoft/70">Replication across validator set</p>
              <div className="h-1.5 w-full rounded-full bg-white/5">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-textSoft/70">Last block finalised</p>
              <p className="text-[11px] text-textSoft/60">
                8.3s ago • Validator quorum 13/13
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default AttendancePage;


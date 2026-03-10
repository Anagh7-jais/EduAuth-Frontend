import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { mockCertificates, mockStudents } from "../services/mockData";

const StudentPortfolioPage = () => {
  const student = mockStudents[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            Student Academic Portfolio
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Unified view of attendance, integrity scores, originality, and
            blockchain-verified credentials.
          </p>
        </div>
        <StatusBadge variant="success">
          Portfolio is blockchain-backed and recruiter-ready
        </StatusBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <DashboardCard
          title="Student Profile"
          subtitle="Demo profile synthesised for hackathon."
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative h-20 w-20 rounded-3xl bg-animated-gradient shadow-neon-soft">
              <div className="absolute inset-[3px] rounded-3xl bg-black/80 border border-aquaHighlight/40 flex items-center justify-center">
                <span className="font-heading text-2xl text-aquaHighlight">
                  A
                </span>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-heading text-lg text-textSoft">
                {student.name}
              </p>
              <p className="text-textSoft/70">{student.program}</p>
              <p className="text-textSoft/60 text-xs">{student.university}</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Portfolio Export"
          subtitle="Generate recruiter-facing PDF snapshot."
        >
          <p className="text-xs text-textSoft/70">
            For the demo, this action is simulated. In a production build, this
            would export a signed PDF with embedded verification proofs and QR
            code linking to public credential view.
          </p>
          <button className="neo-btn-primary mt-4 w-full text-sm">
            Download Verified Academic Portfolio (PDF)
          </button>
        </DashboardCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <DashboardCard
          title="Attendance"
          value={`${student.attendance}%`}
          subtitle="Face-verified attendance across current program."
        >
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-aquaHighlight via-electricBlue to-cyberPurple"
              style={{ width: `${student.attendance}%` }}
            />
          </div>
        </DashboardCard>
        <DashboardCard
          title="Integrity Score"
          value={`${student.integrityScore}%`}
          subtitle="Aggregate score from proctoring and conduct events."
        />
        <DashboardCard
          title="Originality Score"
          value={`${student.originalityScore}%`}
          subtitle="Average originality index across major submissions."
        />
      </div>

      <DashboardCard
        title="Blockchain Verified Certificates"
        subtitle="Credentials are anchored to the EduAuth ledger with on-chain timestamps."
      >
        <div className="mt-3 grid gap-3 md:grid-cols-2 text-xs">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm text-textSoft">{cert.title}</p>
                  <p className="mt-0.5 text-[11px] text-textSoft/60">
                    Holder: {cert.studentName}
                  </p>
                </div>
                <StatusBadge
                  variant={
                    cert.status === "Authentic"
                      ? "success"
                      : cert.status === "Fake"
                      ? "danger"
                      : "warning"
                  }
                >
                  {cert.status}
                </StatusBadge>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-textSoft/70">Hash ID</p>
                <p className="font-mono text-[11px] text-aquaHighlight">
                  {cert.hash}
                </p>
                <p className="text-[11px] text-textSoft/60">
                  Anchored on: {new Date(cert.chainTimestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default StudentPortfolioPage;


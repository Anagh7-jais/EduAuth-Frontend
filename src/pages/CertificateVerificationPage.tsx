import { useState } from "react";
import UploadArea from "../components/UploadArea";
import StatusBadge from "../components/StatusBadge";
import DashboardCard from "../components/DashboardCard";
import { api } from "../services/mockApi";
import { useToaster } from "../components/ToasterProvider";

type VerificationResult = Awaited<ReturnType<typeof api.verifyCertificate>>;

const CertificateVerificationPage = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const { pushToast } = useToaster();

  const handleSimulateUpload = async () => {
    setIsVerifying(true);
    pushToast({
      variant: "info",
      message: "Simulating on-chain certificate verification..."
    });
    try {
      const res = await api.verifyCertificate();
      setResult(res);
      pushToast({
        variant: res.status === "Authentic" ? "success" : "error",
        message:
          res.status === "Authentic"
            ? "Certificate verified as authentic."
            : res.status === "Pending"
            ? "Verification pending, queued for chain confirmation."
            : "Certificate flagged as fake."
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const renderStatusBadge = () => {
    if (!result) return null;
    if (result.status === "Authentic") {
      return <StatusBadge variant="success">Authentic ✅</StatusBadge>;
    }
    if (result.status === "Fake") {
      return <StatusBadge variant="danger">Fake ❌</StatusBadge>;
    }
    return <StatusBadge variant="warning">Pending Verification ⏳</StatusBadge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl text-textSoft">
            Certificate Verification
          </h2>
          <p className="mt-1 text-sm text-textSoft/70">
            Recruiters can drag-and-drop any credential to instantly validate it
            against the EduAuth blockchain.
          </p>
        </div>
        <StatusBadge variant="info">
          Demo Mode • Verification latency simulated
        </StatusBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <DashboardCard
          title="Drag & Drop Credential"
          subtitle="PDF, PNG, or image snapshots of graduation certificates."
        >
          <UploadArea
            label={
              isVerifying ? "Verifying on-chain..." : "Drop certificate file here"
            }
            onFakeUpload={handleSimulateUpload}
            hint="This is a hackathon-safe mock endpoint. No real documents are uploaded."
          />
        </DashboardCard>

        <DashboardCard
          title="Verification Result"
          subtitle="Futuristic glassmorphic panel with chain metadata."
          accent={renderStatusBadge()}
        >
          {result ? (
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-textSoft/70">Holder</p>
                <p className="mt-0.5 text-sm text-textSoft">
                  {result.studentName}
                </p>
              </div>
              <div>
                <p className="text-textSoft/70">Credential</p>
                <p className="mt-0.5 text-sm text-textSoft">{result.title}</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-textSoft/70">Certificate Hash ID</p>
                  <p className="mt-0.5 font-mono text-[11px] text-aquaHighlight">
                    {result.hash}
                  </p>
                </div>
                <div>
                  <p className="text-textSoft/70">Blockchain Timestamp</p>
                  <p className="mt-0.5 text-[11px] text-textSoft/70">
                    {new Date(result.chainTimestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-textSoft/70">Chain Notes</p>
                <p className="mt-0.5 text-[11px] text-textSoft/65">
                  Immutable, recruiter-verifiable ledger anchoring credential
                  authenticity and issuance authority.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-textSoft/60">
              Upload a sample credential to see simulated authenticity, fake, or
              pending states. This panel animates beautifully on success, ideal
              for a live demo.
            </p>
          )}
        </DashboardCard>
      </div>
    </div>
  );
};

export default CertificateVerificationPage;


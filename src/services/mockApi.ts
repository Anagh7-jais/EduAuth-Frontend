import axios from "axios";
import {
  mockCertificates,
  mockIntegrityTrend,
  mockPlagiarismResult,
  mockProctoringSnapshot,
  mockStudents,
  mockVerificationActivity
} from "./mockData";

const client = axios.create();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getStudents() {
    await delay(500);
    await client.get("/mock/students").catch(() => undefined);
    return mockStudents;
  },
  async getCertificates() {
    await delay(600);
    await client.get("/mock/certificates").catch(() => undefined);
    return mockCertificates;
  },
  async verifyCertificate() {
    await delay(900);
    await client.post("/mock/certificates/verify").catch(() => undefined);
    const random = Math.random();
    if (random > 0.7) return mockCertificates[1];
    if (random < 0.3)
      return {
        ...mockCertificates[0],
        status: "Pending"
      } as const;
    return mockCertificates[0];
  },
  async getDashboardSummary() {
    await delay(500);
    return {
      integrityIndex: 92.4,
      originalityScore: 88.7,
      blockchainLogsVerified: 0.95,
      erpConnected: true,
      recentAlerts: mockProctoringSnapshot.alerts.slice(0, 2),
      integrityTrend: mockIntegrityTrend,
      verificationActivity: mockVerificationActivity
    };
  },
  async getPlagiarismResult() {
    await delay(800);
    await client.post("/mock/plagiarism/check").catch(() => undefined);
    return mockPlagiarismResult;
  },
  async getProctoringSnapshot() {
    await delay(700);
    await client.get("/mock/proctoring").catch(() => undefined);
    return mockProctoringSnapshot;
  }
};


export const mockStudents = [
  {
    id: "STU-2024-001",
    name: "Aarav Nair",
    program: "B.Tech Computer Science",
    university: "NovaTech University",
    attendance: 96,
    integrityScore: 94,
    originalityScore: 91,
    status: "present"
  },
  {
    id: "STU-2024-002",
    name: "Layla Hassan",
    program: "B.Sc Data Science",
    university: "Quantum State University",
    attendance: 89,
    integrityScore: 90,
    originalityScore: 88,
    status: "present"
  },
  {
    id: "STU-2024-003",
    name: "Daniel Kim",
    program: "MBA Business Analytics",
    university: "Aurora Business School",
    attendance: 72,
    integrityScore: 81,
    originalityScore: 79,
    status: "absent"
  }
] as const;

export const mockCertificates = [
  {
    id: "CERT-0X91A",
    studentName: "Aarav Nair",
    title: "Bachelor of Technology in Computer Science",
    status: "Authentic",
    hash: "0xA39F91B2CDE4",
    chainTimestamp: "2026-02-18T14:33:21Z"
  },
  {
    id: "CERT-0X22F",
    studentName: "Daniel Kim",
    title: "Master of Business Administration",
    status: "Fake",
    hash: "0xBBE31092F1C8",
    chainTimestamp: "2026-01-09T09:18:44Z"
  }
] as const;

export const mockVerificationActivity = [
  { label: "Mon", value: 34 },
  { label: "Tue", value: 56 },
  { label: "Wed", value: 42 },
  { label: "Thu", value: 68 },
  { label: "Fri", value: 51 }
] as const;

export const mockIntegrityTrend = [
  { label: "2022", value: 78 },
  { label: "2023", value: 85 },
  { label: "2024", value: 92 }
] as const;

export const mockPlagiarismResult = {
  originalityIndex: 84,
  aiGeneratedPortion: 16,
  overlapSegments: [
    {
      id: 1,
      studentSnippet:
        "AI-driven agents coordinate integrity checks across attendance, submissions, and certifications in real time.",
      sourceSnippet:
        "Autonomous AI agents synchronize verification across attendance, submissions, and credential ledgers.",
      score: 0.82
    },
    {
      id: 2,
      studentSnippet:
        "Each credential hash is anchored to a multi-chain ledger, preventing tampering or backdated issuance.",
      sourceSnippet:
        "Hashes are anchored to a permissioned blockchain, making credential backdating effectively impossible.",
      score: 0.77
    }
  ]
} as const;

export const mockProctoringSnapshot = {
  suspicionScore: 62,
  alerts: [
    {
      id: "ALERT-341",
      message: "Multiple faces detected 🚨",
      severity: "high",
      timestamp: "2026-03-10T09:41:12Z"
    },
    {
      id: "ALERT-342",
      message: "Candidate out of frame for 22 seconds",
      severity: "medium",
      timestamp: "2026-03-10T09:39:05Z"
    }
  ]
} as const;


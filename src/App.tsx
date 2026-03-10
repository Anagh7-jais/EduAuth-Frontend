import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LandingLoginPage from "./pages/LandingLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AttendancePage from "./pages/AttendancePage";
import CertificateVerificationPage from "./pages/CertificateVerificationPage";
import PlagiarismDetectionPage from "./pages/PlagiarismDetectionPage";
import ProctoringPage from "./pages/ProctoringPage";
import StudentPortfolioPage from "./pages/StudentPortfolioPage";
import { ToasterProvider } from "./components/ToasterProvider";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <ToasterProvider>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#7209B733,_transparent_60%),radial-gradient(circle_at_bottom,_#4361EE44,_transparent_55%)] bg-black text-textSoft">
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<LandingLoginPage />} />
              <Route path="/login" element={<LandingLoginPage />} />
            </Route>

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<AdminDashboardPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route
                path="/verify-certificate"
                element={<CertificateVerificationPage />}
              />
              <Route
                path="/plagiarism-check"
                element={<PlagiarismDetectionPage />}
              />
              <Route path="/proctoring" element={<ProctoringPage />} />
              <Route
                path="/student-portfolio"
                element={<StudentPortfolioPage />}
              />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ToasterProvider>
    </AuthProvider>
  );
}

export default App;


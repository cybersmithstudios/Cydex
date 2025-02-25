import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

const DashboardRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case "customer":
      return (
        <CustomerDashboard
          userName={`${user.firstName} ${user.lastName}`}
          walletBalance={user.walletBalance}
        />
      );
    // Add other role dashboards here
    default:
      return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardRoute />
              </PrivateRoute>
            }
          />
          {/* Add a catch-all route that redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;

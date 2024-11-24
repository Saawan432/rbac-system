import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import loader from "../src/assets/loader.gif";
// Lazy loading components
const Navbar = React.lazy(() => import("./components/Layout/Navbar"));
const Sidebar = React.lazy(() => import("./components/Layout/Sidebar"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const RolesPage = React.lazy(() => import("./pages/RolesPage"));
const PermissionsPage = React.lazy(() => import("./pages/PermissionPage"));
const UsersPage = React.lazy(() => import("./pages/UserPage"));
const LoginPage = React.lazy(() => import("./components/Login"));
const RegisterPage = React.lazy(() => import("./components/Register"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex h-screen ">
        {/* Lazy load Sidebar only if authenticated */}
        <Suspense
          fallback={
            <div className="flex justify-center h-screen item-center sm:h-24">
              <img src={loader} alt="loading..." />
            </div>
          }
        >
          {isAuthenticated && <Sidebar />}
        </Suspense>

        <div className="flex flex-col flex-grow">
          {/* Lazy load Navbar only if authenticated */}
          <Suspense
            fallback={
              <div className="flex justify-center h-screen item-center sm:h-24">
                <img src={loader} alt="loading..." />
              </div>
            }
          >
            {isAuthenticated && <Navbar />}
          </Suspense>

          <main
            className={`flex-grow ${isAuthenticated ? "p-4 bg-gray-100" : ""}`}
          >
            <Suspense
              fallback={
                <div className="flex justify-center h-screen item-center sm:h-24">
                  <img src={loader} alt="loading..." />
                </div>
              }
            >
              <Routes>
                {/* Public Routes */}
                <Route
                  path="/login"
                  element={
                    <LoginPage onLogin={() => setIsAuthenticated(true)} />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <RegisterPage onRegister={() => setIsAuthenticated(true)} />
                  }
                />

                {/* Private Routes */}
                {isAuthenticated ? (
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/permissions" element={<PermissionsPage />} />
                  </>
                ) : (
                  <Route path="*" element={<Navigate to="/login" replace />} />
                )}
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

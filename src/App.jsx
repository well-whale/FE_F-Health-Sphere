import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Patient from "./pages/patient/Patient";
import Band from "./pages/band/Band";
import Login from "./pages/login/Login";
import MainLayout from "./layout/MainLayout";

const isAuthenticated = () => {
  return !!localStorage.getItem("token"); 
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="*" 
          element={isAuthenticated() ? <MainLayoutWrapper /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </Router>
  );
};

const MainLayoutWrapper = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/band" element={<Band />} />
      </Routes>
    </MainLayout>
  );
};

export default App;

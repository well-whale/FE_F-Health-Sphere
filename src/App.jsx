import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Patient from "./pages/patient/Patient";
import Band from "./pages/band/Band";
import Login from "./pages/login/Login";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route không cần layout (ví dụ: trang đăng nhập) */}
        <Route path="/login" element={<Login />} />

        {/* Route có layout chung */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/band" element={<Band />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

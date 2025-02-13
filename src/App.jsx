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
     
        <Route path="/login" element={<Login />} />


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

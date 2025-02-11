import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout"
const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

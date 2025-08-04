// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard'; // ✅ Import this
import PersonalProfile from './pages/profile/PersonalProfile';
import Registration from './pages/academics/Registration';
import Requisition from './pages/academics/Requisition';
import Evaluation from './pages/academics/Evaluation';
import Clearance from './pages/academics/Clearance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard layout wraps all dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />{' '}
          {/* ✅ This is the default route at /dashboard */}
          <Route path="profile" element={<PersonalProfile />} />
          <Route path="academic/registration" element={<Registration />} />
          <Route path="academic/requisition" element={<Requisition />} />
          <Route path="academic/evaluation" element={<Evaluation />} />
          <Route path="academic/clearance" element={<Clearance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

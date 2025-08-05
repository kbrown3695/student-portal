// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard'; // ✅ Import this
import PersonalProfile from './pages/profile/PersonalProfile';
// import Registration from './pages/academics/Finance Registration';
import Requisition from './pages/academics/Requisition';
import Evaluation from './pages/academics/Evaluation';
import Clearance from './pages/academics/Clearance';
import FinanceRegistration from './pages/academics/Finance Registration';
import ChangePassword from './pages/settings/ChangePassword';



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
          <Route path="academic/registration/finance" element={<FinanceRegistration />} />
          <Route path="academic/requisition" element={<Requisition />} />
          <Route path="academic/evaluation" element={<Evaluation />} />
          <Route path="academic/clearance" element={<Clearance />} />
          <Route path="financial/statement" element={<FeeStatement />} />
          {/* <Route path="financial/accommodation" element={<AccommodationStatement />} /> */}
          {/* <Route path="financial/receipts" element={<Receipts />} /> */}
          {/* <Route path="accommodation" element={<div>Hostel Booking</div>} /> */}
          {/* <Route path="examination/transcript" element={<div>Transcript</div>} /> */}
          <Route path="settings" element={<div><ChangePassword /></div>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

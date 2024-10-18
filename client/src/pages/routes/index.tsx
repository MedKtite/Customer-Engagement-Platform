import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Overview from '../Dashboard/Overview';
import Contacts from '../Dashboard/Contacts';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Layout */}
        <Route element={<Overview />}>
          {/* Dashboard Pages */}
          <Route path="/dashboard/contact" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;

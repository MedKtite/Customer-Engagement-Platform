import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import ForgotPassword from '../Auth/ForgotPassword';
import NewPassword from '../Auth/NewPassword';
import Overview from '../Dashboard/Overview';
import Contacts from '../Dashboard/Contacts';
import ResetPasswordSuccess from '../Auth/ResetPasswordSuccess';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />

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

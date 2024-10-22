import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import ForgotPassword from '../Auth/ForgotPassword';
import NewPassword from '../Auth/NewPassword';
import Dashboard from '../Dashboard/Overview';
import ResetPasswordSuccess from '../Auth/ResetPasswordSuccess';
import Contacts from '../Dashboard/Contacts';

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
  
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} /> {/* Updated path */}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
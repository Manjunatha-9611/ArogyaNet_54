import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import Login from './components/Login';
import ReportSymptoms from './components/ReportSymptoms';
import SignUpForm from './components/SignUpForm';
import Telemedicine from './components/Telemedicine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportSymptoms />} />
        <Route path="/telemedicine" element={<Telemedicine />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUpForm" element={<SignUpForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

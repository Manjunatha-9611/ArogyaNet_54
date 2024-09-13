import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Include CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Community Health Monitoring System</h1>
        <p>
          A platform to monitor real-time health data and provide remote healthcare services for rural areas.
        </p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Real-Time Monitoring</h2>
          <p>
            Stay updated with health trends and disease outbreaks in your community. Self-report symptoms and contribute to crowdsourced health data.
          </p>
        </div>
        <div className="feature">
          <h2>Telemedicine Services</h2>
          <p>
            Access certified doctors for remote consultations through video calls. Get e-prescriptions without leaving your home.
          </p>
        </div>
        <div className="feature">
          <h2>Health Tips & Alerts</h2>
          <p>
            Receive personalized health tips and emergency alerts in case of potential outbreaks. Keep your family safe and healthy.
          </p>
        </div>
      </section>

      <div className="cta-buttons">
        <Link to="/Login" className="btn">
          Login
        </Link>
        <Link to="/SignUpForm" className="btn btn-secondary">
          Signup
        </Link>
      </div>

      <footer className="footer">
        <p>
          © 2024 Community Health Monitoring System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

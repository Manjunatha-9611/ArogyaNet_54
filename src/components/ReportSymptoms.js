import axios from 'axios';
import React, { useState } from 'react';

const ReportSymptoms = () => {
  const [symptoms, setSymptoms] = useState({ fever: false, cough: false, fatigue: false });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setSymptoms({ ...symptoms, [name]: checked });
  };

  const handleSubmit = async () => {
    // Send symptoms to the backend server
    try {
      await axios.post('/api/report-symptoms', symptoms);
      alert('Symptoms reported');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Daily Health Check-In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" name="fever" onChange={handleInputChange} /> Fever
        </label>
        <label>
          <input type="checkbox" name="cough" onChange={handleInputChange} /> Cough
        </label>
        <label>
          <input type="checkbox" name="fatigue" onChange={handleInputChange} /> Fatigue
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportSymptoms;

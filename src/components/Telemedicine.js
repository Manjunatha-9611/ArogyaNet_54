import React from 'react';

const Telemedicine = () => {
  const handleStartCall = () => {
    // Use Twilio or WebRTC to start a video call
    window.location.href = 'https://meet.jit.si/YourTelemedicineRoom';
  };

  return (
    <div>
      <h2>Telemedicine</h2>
      <button onClick={handleStartCall}>Start Video Consultation</button>
    </div>
  );
};

export default Telemedicine;

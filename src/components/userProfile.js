import React, { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    chronicConditions: ''
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Submit to backend or save locally
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved');
  };

  return (
    <div>
      <h2>Set Up Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleInputChange} />
        <input name="age" placeholder="Age" onChange={handleInputChange} />
        <input name="gender" placeholder="Gender" onChange={handleInputChange} />
        <input name="location" placeholder="Location" onChange={handleInputChange} />
        <textarea name="chronicConditions" placeholder="Chronic Conditions" onChange={handleInputChange} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;

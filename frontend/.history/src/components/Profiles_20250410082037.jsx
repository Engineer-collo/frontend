// src/components/Profiles.jsx
import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    location: "",
    profile_image: "",
    website: "",
    bio: "",
    user_id: 1,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  const handleAddProfile = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
    })
      .then((res) => res.json())
      .then((data) => setProfiles([...profiles, data]))
      .catch((error) => console.error("Error adding profile:", error));
  };

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <h3>{profile.location}</h3>
            <p>{profile.bio}</p>
          </li>
        ))}
      </ul>

      <h2>Add New Profile</h2>
      <form onSubmit={handleAddProfile}>
        <input
          type="text"
          name="location"
          value={newProfile.location}
          onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })}
          placeholder="Location"
          required
        />
        <textarea
          name="bio"
          value={newProfile.bio}
          onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
          placeholder="Bio"
          required
        />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default Profiles;

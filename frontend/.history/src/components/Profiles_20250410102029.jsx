import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles data from API
    fetch("http://127.0.0.1:5000/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <img src={profile.profile_image} alt="Profile"  className="h-26"/>
            <h3>{profile.location}</h3>
            <p>{profile.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;

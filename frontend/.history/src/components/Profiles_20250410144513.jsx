// src/components/Profiles.jsx
import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Profiles</h1>
      <ul className="space-y-6 w-full max-w-2xl">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md"
          >
            <img
              src={profile.profile_image}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{profile.location}</h3>
            <p className="text-center text-gray-600">{profile.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;

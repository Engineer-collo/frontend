
import { useState, useEffect } from "react";

const Profile = ()=> {
    const [profiles, setProfiles] = useState([])
    const api_url = "http://localhost:5000/api/profiles";
    useEffect(() => {
        fetch(api_url)
        .then( (res) =>{
            if (!res.ok) {
                throw new Error("Error fetching data");
            }
            return res.json()
        })
        .then( (data) => {
            setProfiles(data)
        })
        .then( (error) => {
            console.error("Error:", error)
        })
    },[])
    return(
        <>
        <div className="">
            <h2 className="">User Profiles</h2>
            <div className="">
                {
                    profiles.map( (profile) => (
                        <div key={profile.id} className="">
                            <h3 className=""> {profile.profile_url}</h3>
                        </div>
                    ) )
                }
            </div>
            
        </div>
        </>
    )
}
export default Profile;
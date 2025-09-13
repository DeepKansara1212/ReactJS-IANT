import React from "react";
import profilePic from "../assets/Images/profile-pic.jpg"

// Named Export
export const Profile = () => {
  return (
    <div>
      <img
        // Public Img
        // src="/Images/profile-pic-public.jpg"

        // Asset Img
        src={profilePic}
        alt="Katherine Johnson"
        height={200}
        width={200} 
      />
    </div>
  );
};


const UserDetails = () => {
    return (
        <>
            <h1>Name: Alice</h1>
        </>
    )
}

export default UserDetails;
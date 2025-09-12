import React from "react";

// Named Export
export const Profile = () => {
  return (
    <div>
      <img
        src="/Images/profile-pic-public.jpg"
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
import React from "react";
import UserRole from "./UserRole";

const User = (props) => {
  const role = "Full Stack Developer";
  const exp = 1;

  return (
    <>
      <h1>My name is {props.name}</h1>
      <h1>I am {props.age} years old</h1>
      <UserRole role={role} exp={exp} />

      <h3>Email: {props.UserDetails.email}</h3>
      <h3>Mobile No: {props.UserDetails.mobile}</h3>
    </>
  );
};

export default User;

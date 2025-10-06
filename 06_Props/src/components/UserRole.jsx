import React, { useState } from "react";
import Student from "./Student";

const UserRole = ({ role, exp }) => {

    const [student, setStudent] = useState();

  return (
    <>
      <h1>I am a {role}</h1>
      <h1>I have {exp} year of experience</h1>
      <button onClick={() => setStudent("Deep")}>Change Student</button>
      <Student student={student} />
    </> 
  );
};

export default UserRole;

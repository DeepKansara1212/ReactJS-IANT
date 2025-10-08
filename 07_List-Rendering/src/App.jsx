import React from "react";
import "./App.css";

const App = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  // const people = [
  //   {
  //     id: 0,
  //     name: "Creola Katherine Johnson",
  //     profession: "mathematician",
  //   },
  //   {
  //     id: 1,
  //     name: "Mario José Molina-Pasquel Henríquez",
  //     profession: "chemist",
  //   },
  //   {
  //     id: 2,
  //     name: "Mohammad Abdus Salam",
  //     profession: "physicist",
  //   },
  //   {
  //     id: 3,
  //     name: "Percy Lavon Julian",
  //     profession: "chemist",
  //   },
  //   {
  //     id: 4,
  //     name: "Subrahmanyan Chandrasekhar",
  //     profession: "astrophysicist",
  //   },
  // ];

  // const chemist_people = people.filter((person) => person.profession === "chemist")
  // console.log(chemist_people);

  const updated_people = people.map((ele) => <li>{ele}</li>);

  return (
    <>
      <ul>{updated_people}</ul>
    </>
  );
};

export default App;

import React from "react";

const Hogshow = props => {
  return (
    <div>
      <h2>Name: {props.hog.name}</h2>
      <p>Specialty: {props.hog.specialty}</p>
      {props.hog.greased ? <p>Greased: YES</p> : <p>Greased: NO</p>}
      <p>Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Medal achieved: {props.hog['highest medal achieved']}</p>
      <button onClick={props.deselectHog}>BACK</button>
    </div>
  );
};

export default Hogshow;

// {
//     name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'
//   },

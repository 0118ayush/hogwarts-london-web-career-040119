import React from "react";

const Hog = props => {
    console.log(props)
  return (
    <div onClick={() => props.handleClick(props.hog)} >
        <h2>{props.hog.name}</h2>
        <img src={(`../hog-imgs/${props.image}.jpg`)} />
    </div>
  );
};

export default Hog;

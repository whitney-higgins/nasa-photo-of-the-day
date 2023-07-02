import React from "react";

const NasaPhoto = (props) => {
  //console.log(props.data);
  return (
    <div className="photo">
      <img src={props.data.hdurl} alt="pic of the day" />
    </div>
  );
};

export default NasaPhoto;

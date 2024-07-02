import React from "react";

const QueueDiv = ({ title, imgSrc, subtitle }) => {
  return (
    <div className="queue-div">
      <img src={imgSrc} alt="" />
      <div className="queue-div-title">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default QueueDiv;

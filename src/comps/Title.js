import React from "react";
import fireImg from "./../firebase/fire.png";

const Title = () => {
  return (
    <div className="title" style={{ textAlign: "center" }}>
      <img src={fireImg} width="50px" height="auto" alt="fire" />
      <h1>FireGram</h1>
      <h2>Your Pictures</h2>
      <p>
        Save Your Most Precious Moments And Visit Them Whenever We Don't Really
        Care ♡
      </p>
    </div>
  );
};

export default Title;

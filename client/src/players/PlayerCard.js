import React from "react";

const PlayerCard = (props) => {
  return (
    <div className="container-fluid">
      <h5>Player Details Card Placeholder</h5>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src="" alt="" />
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <p>
                Name: {props.currentPlayerInfo.firstName}
                {props.currentPlayerInfo.lastName}
              </p>
              <br></br>
              <p>Email:{props.currentPlayerInfo.email}</p>
            </div>
            <div className="card-content">
              <p>Is Solo-Artist?{props.currentPlayerInfo.isSoloArtist} </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerCard;
import React from "react";

// deconstruct state where we need both the playerInfo and the updateCurrentPlayer function with the currentPlayerInfo
const PlayerList = ({ playerInfo, updateCurrentPlayer, currentPlayerInfo }) => {
  return (
    <div className="container-fluid">
      <h5>Player List placeholder</h5>
      <ul className="collection with-header">
        <li className="collection-header">
          <h6>List of all players</h6>
          {playerInfo.map((currentPlayerInfo) => (
            <a
              href="#!"
              className="collection-item"
              key={currentPlayerInfo._id}
              onClick={(event) => updateCurrentPlayer(currentPlayerInfo)}
            >
              {currentPlayerInfo.firstName} {currentPlayerInfo.lastName}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default PlayerList;

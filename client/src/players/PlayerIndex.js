import React, { useState, useEffect } from "react";
import axios from "axios";

import PlayerList from "./PlayerList";
import PlayerCard from "./PlayerCard";
import AddPlayerForm from "./AddPlayerForm";

const PlayerIndex = () => {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [currentPlayerInfo, setCurrentPlayerInfo] = useState({});
  // currentPlayerInfo - item

  useEffect(() => {
    const fetchPlayers = async () => {
      const result = await axios.get(`http://localhost:5000/api-players`);
      console.log("api-data-check", result.data);
      setPlayerInfo(result.data);
      console.log("setPlayerInfo-check", result.data);
    };
    fetchPlayers();
  }, []);

  const updateCurrentPlayer = (currentPlayerInfo) =>
    setCurrentPlayerInfo(currentPlayerInfo);

  return (
    <div className="container-fluid">
      <PlayerList
        playerInfo={playerInfo}
        updateCurrentPlayer={updateCurrentPlayer}
      />
      <PlayerCard currentPlayerInfo={currentPlayerInfo} />
      <AddPlayerForm />
    </div>
  );
};
export default PlayerIndex;

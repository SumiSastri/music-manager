import React from "react";
import PlayerList from "./PlayerList";
import PlayerCard from "./PlayerCard";
import PlayersForm from "./PlayersForm";

const PlayersIndex = () => {
  return (
    <div className="container-fluid">
      <PlayerList />
      <PlayerCard />
      <PlayersForm />
    </div>
  );
};
export default PlayersIndex;

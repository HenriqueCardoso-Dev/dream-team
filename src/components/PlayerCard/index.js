import React from "react";
import './index.css';

const PlayerCard = (props) => {
  const player = props.player;

  return(
    <div className="player-card mx-4">
      <div>
        <img src={player.image} alt="teste"/>
      </div>

      <p className="mt-2">
        <strong>"{player.nick.toUpperCase()}"</strong>

        <br/>
        <span>
          {player.functionInGame.toLowerCase()}
        </span>
      </p>
    </div>
  );
}

export default PlayerCard;
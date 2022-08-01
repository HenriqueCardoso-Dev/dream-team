import React from "react";
import { AppDiv } from "../../Styles";
import Banner from "../Banner";
import SquadGrid from "../SquadGrid";

const Home = (props) => {
  
  /* const staticPlayers = []; */

  const staticPlayers = [
    {
      name: "sasha",
      nick: "s1mple",
      functionInGame: "awper",
      squad: '0',
      image: "https://d3dwep9z8m8y9r.cloudfront.net/players/2022/03/players-1869/navi_portrait/7149/conversions/S1mple-webp.webp"
    },
    {
      name: "Marcelo",
      nick: "Coldeza",
      functionInGame: "Rifler",
      squad: '0',
      image: "https://egamersworld.com/uploads/counterstrike/players/faze-clan-coldzera-photo.png"
    },
    {
      name: "Marcelo",
      nick: "flush4",
      functionInGame: "Rifler",
      squad: '0',
      image: "https://egamersworld.com/uploads/counterstrike/players/faze-clan-coldzera-photo.png"
    },
    {
      name: "Marcelo",
      nick: "m0nesy",
      functionInGame: "Rifler",
      squad: '0',
      image: "https://egamersworld.com/uploads/counterstrike/players/faze-clan-coldzera-photo.png"
    },
    {
      name: "Marcelo",
      nick: "aleksib",
      functionInGame: "Rifler",
      squad: '0',
      image: "https://egamersworld.com/uploads/counterstrike/players/faze-clan-coldzera-photo.png"
    }
  ]

  return (
    <AppDiv>
      <Banner squads={props.members.length > 0}/>

      {props.squads.map(
        squad => <SquadGrid 
          squad={squad.label} 
          key={squad.id} 
          players={props.members.filter(member => member.squad === squad.id)}
        />
      )}
  
      </AppDiv>
  );
}

export default Home;
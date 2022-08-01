import React from "react";
import { AppDiv } from "../../Styles";
import Banner from "../Banner";
import SquadGrid from "../SquadGrid";

const Home = (props) => {
  

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
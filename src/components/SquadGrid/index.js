import React from "react"
import PlayerCard from "../PlayerCard";
import Carousel from "react-elastic-carousel";
import './index.css';

const SquadGrid = (props) => {
  const breakPoints = [
    {width: 1, itemsToShow: 1,  pagination:true, enableSwipe:true},
    {width: 500, itemsToShow: 2,  pagination:true, enableSwipe:true},
    {width: 700, itemsToShow: 3,  pagination:true, enableSwipe:true},
    {width: 1000, itemsToShow: 4,  pagination:true, enableSwipe:true},
    {width: 1200, itemsToShow: 5},
  ]

  return (
    (props.players.length > 0) && <section className="squad-grid d-flex justify-content-center p-5 flex-column align-items-center">
      <h3 className="pb-2">{props.squad}</h3>

      <div className="d-flex players justify-content-center mt-3 flex-wrap">
        <Carousel breakPoints={breakPoints} showArrows={false} pagination={false} enableSwipe={false}>
          {props.players.map(player => <PlayerCard player={player} key={player.nick}/>)}
        </Carousel>
      </div>
    </section>
  );
}

export default SquadGrid;
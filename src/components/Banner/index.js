import React, {Component} from "react";
import bannerImg from './../../../public/images/banner2.png';
import defaultStyle from './index.css'

class Banner extends Component {
  render() {
    const emptySquadsStyle = {
      height: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }

    return (
      <div className="banner py-4" style={!this.props.squads ? emptySquadsStyle : defaultStyle}>
        <h2>MASKED ALIENS</h2>
        <img src={bannerImg} alt="banner" />
      </div>
    );
  }
}

export default Banner;
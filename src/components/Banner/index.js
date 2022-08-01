import React, {Component} from "react";
import bannerImg from './../../../public/images/logo.png';
import defaultStyle from './index.css';
import {Link} from 'react-router-dom';

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
        <h2>DREAM TEAM</h2>
        <img className="my-3" src={bannerImg} alt="banner" />
        {
          !this.props.squads&&<div>
            <p>chegou a hora de montar seu time dos sonhos!</p>
            <Link to="/register-member">
              <button className="btn btn-success">vamos lá!</button>
            </Link>
          </div>
        }
      </div>
    );
  }
}

export default Banner;
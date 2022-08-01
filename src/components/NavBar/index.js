import React from "react";
import bannerImg from './../../assets/images/logo.png';
import { OffCanvas } from "./style";
import { GiHamburgerMenu, GiArchiveRegister } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NavBar = () => {
  
  const toggleMenu = () => {
    const offCanvas = document.querySelector('.offcanvas-menu');
    offCanvas.classList.toggle('is-active');
  }

  return (
    <OffCanvas>
      <button className="btn btn-dark float-end offcanvas-trigger m-2" onClick={toggleMenu}>
        <GiHamburgerMenu/>
      </button>

      <div className="offcanvas-menu p-2">
        <div className="offcanvas-header justify-content-start">
          <img className="me-3" src={bannerImg} alt="banner" />
          <h4 className="mb-0">DREAM TEAM</h4>
        </div>

        <div className="offcanvas-body">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link p-3 text-light" to="/">
                  <FaHome className="me-2"/> 
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3 text-light" to="/register-member">
                  <GiArchiveRegister className="me-2"/>
                  Registrar Membro
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </OffCanvas>

  );
}

export default NavBar;
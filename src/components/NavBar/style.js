import styled from "styled-components";;

export const OffCanvas = styled.div `
  .offcanvas-trigger {
    right: 0;
    position: fixed;
    z-index: 1000;
  }

  .offcanvas{
    &-menu {
      background-color: #080808;
      color: #fff;
      max-width: 400px;
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      transform: translateY(-100%);
      transition: 0.3s;
      z-index: 999;

      &.is-active {
        transform: none;
      }
    }

    &-header {
      img {
        max-width: 50px;
        object-fit: cover;
      }
    }

  }

  .navbar-nav{
    list-style: none;
    width: 100%;

    .nav-item {
      border-bottom: 1px solid #fff;

      &:hover {
        background-color: #323232;
      }
    }
  }
`

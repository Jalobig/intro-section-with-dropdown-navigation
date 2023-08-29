import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import classes from "./Header.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import IconMenu from "../../images/icon-menu.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
const Header = () => {
  const media = useMediaQuery("only screen and (max-width:900px)");
  const [isMenuActive, setIsMenuActive] = useState();
  const menuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  return (
    <header className={classes.header}>
      <img src={Logo} alt="Logo of company" className={classes.header__logo} />

      {media && (
        <img
          src={IconMenu}
          alt="Icon for the menu"
          className={classes.header__menu}
          onClick={menuHandler}
        />
      )}
      {isMenuActive && media && <div className={classes.backdrop} onClick={menuHandler}></div>}

      {((isMenuActive && media)|| !media) && <>
        <Navbar menuHandler={menuHandler} />
      </>}
    </header>
  );
};

export default Header;

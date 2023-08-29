import React from "react";
import classes from "./Main.module.scss";
import Button from "../../components/Button/Button";
import ClientDatabiz from "../../images/client-databiz.svg";
import ClientAudiophile from "../../images/client-audiophile.svg";
import ClientMeet from "../../images/client-meet.svg";
import ClientMaker from "../../images/client-maker.svg";
import HeroDesktop from "../../images/image-hero-desktop.png";
import HeroMobile from "../../images/image-hero-mobile.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const Main = () => {
  const media = useMediaQuery("only screen and (max-width:900px");
  return (
    <main className={classes.intro}>
      <div className={classes.intro__info}>
        <h1 className={classes.intro__heading}>
          Make
          {media ? " ": <br />}
          remote work
        </h1>
        <p className={classes.intro__text}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button className={classes.intro__button}>Learn more</Button>
        <div className={classes.intro__partners}>
          <img
            className={classes["intro__partners--1"]}
            src={ClientDatabiz}
            alt="Databiz logo"
          />
          <img
            className={classes["intro__partners--2"]}
            src={ClientAudiophile}
            alt="Audiophile logo"
          />
          <img
            className={classes["intro__partners--3"]}
            src={ClientMeet}
            alt="Meet logo"
          />
          <img
            className={classes["intro__partners--4"]}
            src={ClientMaker}
            alt="Maker logo"
          />
        </div>
      </div>
      <div>
        <img
          src={media ? HeroMobile : HeroDesktop}
          alt="Hero illustration"
          className={classes.intro__illustration}
        />
      </div>
    </main>
  );
};

export default Main;

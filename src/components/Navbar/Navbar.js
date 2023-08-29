import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import ButtonClear from "../ButtonClear/ButtonClear";
import ArrowCaretDown from "../../images/icon-arrow-down.svg";
import ArrowCaretup from "../../images/icon-arrow-up.svg";

import IconClose from "../../images/icon-close-menu.svg";
import IconCalendar from "../../images/icon-calendar.svg";
import IconPlanning from "../../images/icon-planning.svg";
import IconTodo from "../../images/icon-todo.svg";
import IconReminder from "../../images/icon-reminders.svg";
import OutsideClickHandler from "react-outside-click-handler";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = (props) => {
  const media = useMediaQuery("only screen and (max-width:900px)");
  const [dropDown, setDropdown] = useState({
    features: false,
    company: false,
  });
  const removeDropdown = () => {
    setDropdown({
      features: false,
      company: false,
    });
  };
  const featuresDropDownHandler = () => {
    setDropdown({
      features: true,
      company: false,
    });
  };
  const companyDropDownHandler = () => {
    setDropdown({
      features: false,
      company: true,
    });
  };
  return (
    <nav className={classes.navbar}>
      {media && (
        <img
          src={IconClose}
          alt="Icon Close"
          className={classes.navbar__close}
          onClick={props.menuHandler}
        />
      )}
      <ul className={classes.navbar__list}>
        <li
          classeName={classes["navbar__list-item"]}
          onClick={dropDown.features ? removeDropdown : featuresDropDownHandler}
        >
          Features{" "}
          <img
            src={dropDown.features ? ArrowCaretup : ArrowCaretDown}
            alt="Arrow Caret"
            className={classes.navbar__caret}
          />
        </li>
        {dropDown.features && (
          <OutsideClickHandler onOutsideClick={removeDropdown}>
            <li className={`${classes.dropdown} ${classes.dropdown__features}`}>
              <ul className={classes.dropdown__list}>
                <li className={classes["dropdown__list-item"]}>
                  <img src={IconTodo} alt="Icon for Todo" /> <p>Todo List</p>
                </li>
                <li className={classes["dropdown__list-item"]}>
                  <img src={IconCalendar} alt="Icon for Calendar" />{" "}
                  <p>Calendar</p>
                </li>
                <li className={classes["dropdown__list-item"]}>
                  <img src={IconReminder} alt="Icon for Reminder" />{" "}
                  <p>Reminders</p>
                </li>
                <li className={classes["dropdown__list-item"]}>
                  <img src={IconPlanning} alt="Icon for Planning" />{" "}
                  <p>Planning</p>
                </li>
              </ul>
            </li>
          </OutsideClickHandler>
        )}
        <li
          classeName={classes["navbar__list-item"]}
          onClick={dropDown.company ? removeDropdown : companyDropDownHandler}
        >
          Company{" "}
          <img
            src={dropDown.company ? ArrowCaretup : ArrowCaretDown}
            alt="Arrow Caret"
            className={classes.navbar__caret}
          />
        </li>
        {dropDown.company && (
          <OutsideClickHandler onOutsideClick={removeDropdown}>
            <li className={`${classes.dropdown} ${classes.dropdown__company}`}>
              <ul className={classes.dropdown__list}>
                <li className={classes["dropdown__list-item"]}>
                  <p>History</p>
                </li>
                <li className={classes["dropdown__list-item"]}>
                  <p>Our Team</p>
                </li>
                <li className={classes["dropdown__list-item"]}>
                  <p>Blog</p>
                </li>
              </ul>
            </li>
          </OutsideClickHandler>
        )}
        <li classeName={classes["navbar__list-item"]}>Careers</li>
        <li classeName={classes["navbar__list-item"]}>About</li>
      </ul>

      <ul className={`${classes.navbar__list} ${classes.navbar__register}`}>
        <li classeName={classes["navbar__list-item"]}>Login</li>
        <li classeName={classes["navbar__list-item"]}>
          <ButtonClear>Register</ButtonClear>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

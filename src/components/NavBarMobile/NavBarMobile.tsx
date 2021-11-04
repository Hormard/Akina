import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import { ShopSvg, MailSvg, CalendarSvg, MediaSvg } from "../../assets/svg/sgv";
import styles from "./NavBarMobile.module.css";
import { Home } from "../Home";
import { ContactUs } from "../ContactUs";
import { Events } from "../Events";
import { Media } from "../Media";
import { Shop } from "../Shop";
import { SignUp } from "../SignUp";
import { Footer } from "../Footer";
import { Car } from "../Car/Car";
import { PilotsList } from "../PilotsList";
import { useState } from "react";

const active: React.CSSProperties = {
  borderBottom: "2px solid rgb(22, 157, 247)",
};

export function NavBarMobile() {
  const [btnActive, setBtnActive] = useState(false);

  const onClick = () => {
    setBtnActive(!btnActive);
  };

  const onClickClose = () => {
    setBtnActive(false);
  };
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link className={styles.home_link} onClick={onClickClose} to="/Akina/">
          AKINA-DRIFT
        </Link>
        {btnActive ? (
          <button className={styles.button} onClick={onClick}>
            ✗
          </button>
        ) : (
          <button className={styles.button} onClick={onClick}>
            ☰
          </button>
        )}
      </nav>
      {btnActive ? (
        <div className={styles.burgerContainer}>
          <NavLink
            activeStyle={active}
            className={styles.link}
            onClick={onClickClose}
            to="/Akina/media"
          >
            <MediaSvg /> Media
          </NavLink>
          <NavLink
            activeStyle={active}
            className={styles.link}
            onClick={onClickClose}
            to="/Akina/events"
          >
            <CalendarSvg /> Events
          </NavLink>
          <NavLink
            activeStyle={active}
            className={styles.link}
            onClick={onClickClose}
            to="/Akina/market"
          >
            <ShopSvg /> Market
          </NavLink>
          <NavLink
            activeStyle={active}
            className={styles.link}
            onClick={onClickClose}
            to="/Akina/contacts"
          >
            <MailSvg /> Contact us
          </NavLink>
        </div>
      ) : null}
      <Switch>
        <Route exact path="/Akina/">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/Akina/media">
          <Media />
          <Footer />
        </Route>
        <Route exact path="/Akina/events">
          <Events />
          <Footer />
        </Route>
        <Route exact path="/Akina/market">
          <Shop />
          <Footer />
        </Route>
        <Route exact path="/Akina/contacts">
          <ContactUs />
          <Footer />
        </Route>
        <Route exact path="/Akina/signUp/:id">
          <SignUp />
        </Route>
        <Route exact path="/Akina/car/:id">
          <Car />
          <Footer />
        </Route>
        <Route exact path="/Akina/pilots/:id">
          <PilotsList />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import styles from "./Router.module.css";
import { ShopSvg, MailSvg, CalendarSvg, MediaSvg } from "../assets/svg/sgv";
import { Home } from "../components/Home";
import { ContactUs } from "../components/ContactUs";
import { Events } from "../components/Events";
import { Media } from "../components/Media";
import { Shop } from "../components/Shop";
import { SignUp } from "../components/SignUp";

export function RootRouter() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link className={styles.home_link} to="/">
          AKINA-DRIFT
        </Link>
        <div className={styles.other}>
          <NavLink
            activeStyle={{ borderBottom: "2px solid rgb(22, 157, 247)" }}
            className={styles.link}
            to="/media"
          >
            <MediaSvg /> Media
          </NavLink>
          <NavLink
            activeStyle={{ borderBottom: "2px solid rgb(22, 157, 247)" }}
            className={styles.link}
            to="/events"
          >
            <CalendarSvg /> Events
          </NavLink>
          <NavLink
            activeStyle={{ borderBottom: "2px solid rgb(22, 157, 247)" }}
            className={styles.link}
            to="/shop"
          >
            <ShopSvg /> Market
          </NavLink>
          <NavLink
            activeStyle={{ borderBottom: "2px solid rgb(22, 157, 247)" }}
            className={styles.link}
            to="/contacts"
          >
            <MailSvg /> Contact us
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/market">
          <Shop />
        </Route>
        <Route exact path="/contacts">
          <ContactUs />
        </Route>
        <Route exact path="/signUp/:id">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
import styles from "./Router.module.css";
import { ShopSvg, MailSvg, CalendarSvg, MediaSvg } from "../assets/svg/sgv";
import { Home } from "../components/Home";
import { ContactUs } from "../components/ContactUs";
import { Events } from "../components/Events";
import { Media } from "../components/Media";
import { Shop } from "../components/Shop";
import { SignUp } from "../components/SignUp";
import { Footer } from "../components/Footer";
import { Car } from "../components/Car/Car";
import { PilotsList } from "../components/PilotsList";

const active: React.CSSProperties = {
  borderBottom: "2px solid rgb(22, 157, 247)",
};

export function RootRouter() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link className={styles.home_link} to="/Akina/">
          AKINA-DRIFT
        </Link>
        <div className={styles.other}>
          <NavLink activeStyle={active} className={styles.link} to="/Akina/media">
            <MediaSvg /> Media
          </NavLink>
          <NavLink activeStyle={active} className={styles.link} to="/Akina/events">
            <CalendarSvg /> Events
          </NavLink>
          <NavLink activeStyle={active} className={styles.link} to="/Akina/market">
            <ShopSvg /> Market
          </NavLink>
          <NavLink activeStyle={active} className={styles.link} to="/Akina/contacts">
            <MailSvg /> Contact us
          </NavLink>
        </div>
      </nav>
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

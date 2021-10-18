import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styles from "./Router.module.css";
import { CalendarSvg, MediaSvg } from "../assets/svg";
import { DocumentsSvg, MailSvg } from "../assets/svg/sgv";
import { Home } from "../components/Home";
import { ContactUs } from "../components/ContactUs";

export function RootRouter() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <Link className={styles.home_link} to="/">
          MATSURI
        </Link>
        <div className={styles.other}>
          <Link className={styles.link} to="/calendar">
            <CalendarSvg /> Shop
          </Link>
          <Link className={styles.link} to="/media">
            <MediaSvg /> Media
          </Link>
          <Link className={styles.link} to="/calendar">
            <CalendarSvg /> Events
          </Link>
          <Link className={styles.link} to="/documents">
            <DocumentsSvg /> Documents
          </Link>
          <Link className={styles.link} to="/contacts">
            <MailSvg /> Contact us
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/media">
          <div>Картинки и видосы</div>
        </Route>
        <Route exact path="/calendar">
          <div>Календарь ивентов</div>
        </Route>
        <Route exact path="/documents">
          <div>Документы</div>
        </Route>
        <Route exact path="/contacts">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const active: React.CSSProperties = {
  borderBottom: "1px solid rgb(22, 157, 247)",
};

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.information_container}>
          <h4 className={styles.title}>About</h4>
          <div className={styles.info}>
            <Link to="/" className={styles.home_link}>
              AKINA-DRIFT
            </Link>
            <p className={styles.information_text}>
              Drift is a cornering technique and a type of motorsport characterized by the use of a
              controlled skid at the maximum possible to maintain the speed and angle to the
              trajectory on the track. Competitions are held on dry asphalt, tracks with a lot of
              turns.
            </p>
          </div>
        </div>
        <div className={styles.links_container}>
          <h4 className={styles.title}>Links</h4>
          <div className={styles.link_list}>
            <Link className={styles.link} to="/">
              Home
            </Link>
            <NavLink activeStyle={active} className={styles.link} to="/media">
              Media
            </NavLink>
            <NavLink activeStyle={active} className={styles.link} to="/events">
              Events
            </NavLink>
            <NavLink activeStyle={active} className={styles.link} to="/market">
              Shop
            </NavLink>
            <NavLink activeStyle={active} className={styles.link} to="/contacts">
              Contact us
            </NavLink>
          </div>
        </div>
        <div className={styles.contacts}>
          <h4 className={styles.title}>Contact us</h4>
          <address className={styles.address}>Belarus, Minsk, Leonida Bedy 21</address>
          <a href="tel:+375297532444" className={styles.text}>
            +375 (29) 753 24 44
          </a>
          <a href="mailto:homard@mail.ru" className={styles.text}>
            hormard@mail.ru
          </a>
        </div>
      </div>
    </div>
  );
}

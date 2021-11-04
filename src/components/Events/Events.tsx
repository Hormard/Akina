import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { IState } from "../../redux/store";
import styles from "./Events.module.css";

export function Events() {
  const history = useHistory();
  const events = useSelector((state: IState) => state.events.events);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickPilots = (id: number) => {
    history.push(`/Akina/pilots/${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>Events</h1>
          <p className={styles.text}>
            Preliminary calendar of drifting competitions in Belarus 2021 (Pro2 class)
          </p>
        </div>
        <div className={styles.events}>
          {events.map((item) => {
            return (
              <div key={item.id} className={styles.event_container}>
                <div className={styles.info_container}>
                  <h2 className={styles.event_title}>{item.title}</h2>
                  <p className={styles.event_place}>{item.place}</p>
                </div>
                <div className={styles.date_container}>
                  <p className={styles.event_date}>{item.date}</p>
                  <button className={styles.button} onClick={() => onClickPilots(item.id)}>
                    Show pilots
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

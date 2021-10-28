import events from "./events.json";
import styles from "./Events.module.css";

export function Events() {
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
                <p className={styles.event_date}>{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

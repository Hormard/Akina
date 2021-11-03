import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { IState } from "../../redux/store";
import styles from "./PilotsList.module.css";

interface IParams {
  id: string;
}

export function PilotsList() {
  const params: IParams = useParams();
  const id: number = Number(params.id);
  const events = useSelector((state: IState) => state.events.events);
  const event = events.filter((item) => item.id === id);
  const pilots = event[0].pilots;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event[0].title}</h1>
      {pilots.length === 0 ? (
        <h1 className={styles.subTitle}>No registrants at the moment</h1>
      ) : (
        pilots.map((item) => {
          return (
            <div key={item.id} className={styles.pilotContainer}>
              <div className={styles.nameTable}>
                <p className={styles.text}>
                  {item.firstName} {item.lastName}
                </p>
              </div>
              <div className={styles.carTable}>
                <p className={styles.text}>
                  {item.carBrand} {item.model}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

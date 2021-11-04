import { useHistory } from "react-router";
import styles from "./Card.module.css";

interface ISmallSlide {
  id: number;
  src: string;
}

export interface ICard {
  id: number;
  season: string;
  coast: number;
  brand: string;
  model: string;
  desciption: string;
  name: string;
  tel: string;
  place: string;
  img: ISmallSlide[];
}

export function Card({ id, season, coast, brand, model, place, img }: ICard) {
  const history = useHistory();

  const onClickSelect = (id: number) => {
    history.push(`/Akina/car/${id}`);
  };
  return (
    <div className={styles.cars_container} onClick={() => onClickSelect(id)}>
      <img className={styles.card_img} src={img[0].src} alt="car" />
      <div className={styles.car_info}>
        <h2 className={styles.info}>Brand: {brand}</h2>
        <h2 className={styles.info}>Model: {model}</h2>
      </div>
      <h2 className={styles.season}>Season: {season}</h2>
      <p className={styles.place}>{place}</p>
      <h2 className={styles.coast}>{coast}$</h2>
    </div>
  );
}

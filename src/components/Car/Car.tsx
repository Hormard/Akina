import styles from "./Car.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { SmallSlider } from "../SmallSlider";
import { ZoomCard } from "../ZoomCard";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { IImage } from "../../redux/reducers/cars";

interface IParams {
  id: string;
}

export function Car() {
  const cars = useSelector((state: IState) => state.cars.cars);

  const [activatedImage, setActivatedImage] = useState([{ id: 999, src: "" }]);

  const params: IParams = useParams();
  const id: number = Number(params.id);
  const car = cars[id - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickZoom = (id: number) => {
    const img = car.img.filter((item) => item.id === id);
    setActivatedImage(img);
  };

  const onClickZoomSlider = (img: IImage[]) => {
    setActivatedImage(img);
  };

  const onClickClose = (closeImg: IImage[]) => {
    setActivatedImage(closeImg);
  };

  return (
    <>
      {activatedImage[0].id === 999 ? null : (
        <ZoomCard onClick={onClickClose} activatedImage={activatedImage} />
      )}
      <div className={styles.container}>
        <h1 className={styles.title}>
          {car.brand} {car.model}
        </h1>
        <div className={styles.body}>
          {car.img.length > 1 ? (
            <SmallSlider onClick={onClickZoomSlider} slides={car} />
          ) : (
            <img
              className={styles.img}
              onClick={() => onClickZoom(car.img[0].id)}
              src={car.img[0].src}
              alt="car"
            />
          )}
          <div className={styles.info}>
            <h2 className={styles.coast}>{car.coast} $</h2>
            <p className={styles.text}>
              {car.engine}, {car.hp} HP
            </p>
            <p className={styles.text}>Season: {car.season}</p>
            <p className={styles.desciption}>Description: {car.desciption}</p>
            <p className={styles.city}>{car.place}</p>
            <p className={styles.name}>{car.name}</p>
            <a className={styles.tel} href={`tel:${car.tel}`}>
              {car.tel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

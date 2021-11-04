import styles from "./Home.module.css";
import { CircleSvg, FlagSvg, StickSvg } from "../../assets/svg/sgv";
import { Slider } from "../Slider";
import { Weather } from "../Weather";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider />
      <div className={styles.info}>
        <div className={styles.container}>
          <p className={styles.svg}>
            <CircleSvg />
          </p>
          <h2 className={styles.title}>LIPKI DRIFT</h2>
          <p className={styles.text}>
            Drift training in Minsk. Due to the perfectly flat and wet surface, a lot of power is
            not required. We take any rear-wheel drive car and start drifting!
          </p>
        </div>
        <div className={styles.container}>
          <p className={styles.svg}>
            <FlagSvg />
          </p>
          <h2 className={styles.title}>MATSURI(Pro 2)</h2>
          <p className={styles.text}>
            We are actively promoting amateur summer and winter drift competitions. We are
            developing this movement as an affordable and safe motor sport in Belarus.
          </p>
        </div>
        <div className={styles.container}>
          <p className={styles.svg}>
            <StickSvg />
          </p>
          <h2 className={styles.title}>DRIFT ACADEMY</h2>
          <p className={styles.text}>
            If you do not know where to start or if you need advice on the trajectory, you can
            always contact our instructor for extreme driving and emergency training.
          </p>
        </div>
      </div>
      <Weather />
    </>
  );
}

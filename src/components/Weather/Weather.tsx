import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { useEffect, useState } from "react";
import { ACTIONS } from "../../redux/constants";
import styles from "./Weather.module.css";

export function Weather() {
  const weather = useSelector((state: IState) => state.weather.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_WEATHER });
  }, [dispatch]);

  const [lipkiDate, setLipkiDate] = useState(new Date());
  const [lipkiTime, setLipkiTime] = useState("");
  const [ebisuDate, setEdisuDate] = useState(new Date());
  const [ebisuTime, setEbisuTime] = useState("");

  setInterval(() => {
    setLipkiDate(new Date());
    setEdisuDate(new Date());
  }, 1000);

  useEffect(() => {
    setLipkiTime(lipkiDate.toLocaleTimeString());
    setEbisuTime(ebisuDate.toLocaleTimeString("en-GB", { timeZone: "Asia/Tokyo" }));
  }, [lipkiDate, ebisuDate]);

  return (
    <div className={styles.weather}>
      <div className={styles.weather_container}>
        {weather[0].icon === "Loading..." ? (
          "Loading..."
        ) : (
          <img
            className={styles.weather_icon}
            src={` http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather type"
          />
        )}
        <h3 className={styles.weather_title}>LIPKI</h3>
        <p className={styles.weather_date}>{lipkiTime}</p>
        <div className={styles.weather_info}>
          <div className={styles.weather_temp}>
            <p className={styles.weather_text}>Current {weather[0].temp}°</p>
            <p className={styles.weather_text}>Feels like {weather[0].feels_like}°</p>
          </div>
          <p className={styles.weather_text}>{weather[0].type}</p>
        </div>
      </div>
      <div className={styles.weather_container}>
        {weather[1].icon === "Loading..." ? (
          "Loading..."
        ) : (
          <img
            className={styles.weather_icon}
            src={` http://openweathermap.org/img/wn/${weather[1].icon}@2x.png`}
            alt="weather type"
          />
        )}
        <h3 className={styles.weather_title}>EBISU</h3>
        <p className={styles.weather_date}>{ebisuTime}</p>
        <div className={styles.weather_info}>
          <div className={styles.weather_temp}>
            <p className={styles.weather_text}>Current {weather[1].temp}°</p>
            <p className={styles.weather_text}>Feels like {weather[1].feels_like}°</p>
          </div>
          <p className={styles.weather_text}>{weather[1].type}</p>
        </div>
      </div>
    </div>
  );
}

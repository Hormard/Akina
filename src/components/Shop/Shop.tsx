import styles from "./Shop.module.css";
import { Card } from "../Card";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";

export function Shop() {
  const cars = useSelector((state: IState) => state.cars.cars);

  const [season, setSeason] = useState("All" || "Summer" || "Winter");
  const [minCoast, setMinCoast] = useState(0);
  const [maxCoast, setMaxCoast] = useState(9999999);
  const [brand, setBrand] = useState("All");
  const [renderedCars, setRenderedCars] = useState(cars);
  const minValue: any = useRef();
  const maxValue: any = useRef();

  let brands: any[] = [];

  brands = cars.map((item) => {
    return item.brand;
  });

  brands = brands.reduce((acc, item) => {
    return acc.includes(item) ? acc : [...acc, item];
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickSeason = (season: string) => {
    setSeason(season);
  };

  const onChangeBrand = (brand: string) => {
    setBrand(brand);
  };

  const onChangeMin = (coast: string) => {
    setMinCoast(Number(coast));
  };

  const onChangeMax = (coast: string) => {
    setMaxCoast(Number(coast));
  };

  const onClickReset = () => {
    setSeason("All");
    setBrand("All");
    minValue.current.value = "";
    maxValue.current.value = "";
    setMinCoast(0);
    setMaxCoast(9999999);
  };

  useEffect(() => {
    let filteredCars = cars;

    if (season === "All") {
      filteredCars = cars;
    } else {
      filteredCars = cars.filter((item) => item.season === season);
    }

    if (brand === "All") {
      filteredCars = filteredCars;
    } else {
      filteredCars = filteredCars.filter((item) => item.brand === brand);
    }

    filteredCars = filteredCars.filter((item) => {
      return item.coast >= minCoast && item.coast <= maxCoast;
    });

    setRenderedCars(filteredCars);
  }, [season, brand, minCoast, maxCoast, cars]);

  return (
    <div className={styles.container}>
      <div className={styles.filter_container}>
        <h1 className={styles.filter_title}>FILTERS</h1>
        <h3 className={styles.filter_subtitle}>Season</h3>
        <div className={styles.small_container}>
          <button
            className={season === "All" ? styles.activated_button : styles.button}
            onClick={(e: any) => onClickSeason(e.target.outerText)}
          >
            All
          </button>
          <button
            className={season === "Summer" ? styles.activated_button : styles.button}
            onClick={(e: any) => onClickSeason(e.target.outerText)}
          >
            Summer
          </button>
          <button
            className={season === "Winter" ? styles.activated_button : styles.button}
            onClick={(e: any) => onClickSeason(e.target.outerText)}
          >
            Winter
          </button>
        </div>
        <h3 className={styles.filter_subtitle}>Brand</h3>
        <div className={styles.small_container}>
          <select
            className={styles.select}
            name="brand"
            id="brand"
            onChange={(e: any) => onChangeBrand(e.target.value)}
          >
            <option className={styles.option} value="All">
              All
            </option>
            {brands.map((item, index) => {
              return (
                <option className={styles.option} key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <h3 className={styles.filter_subtitle}>Coast</h3>
        <div className={styles.small_container}>
          <p className={styles.coast}>from</p>
          <input
            className={styles.input}
            type="number"
            onChange={(e) => onChangeMin(e.target.value)}
            placeholder={String(minCoast)}
            ref={minValue}
          />
          <p className={styles.symbol}>$</p>
          <p className={styles.coast}>to</p>
          <input
            className={styles.input}
            type="number"
            onChange={(e) => onChangeMax(e.target.value)}
            placeholder={String(maxCoast)}
            ref={maxValue}
          />
          <p className={styles.symbol}>$</p>
        </div>
        <h3 className={styles.filter_subtitle}>Founded: {renderedCars.length}</h3>
        <button className={styles.reset} onClick={onClickReset}>
          Reset
        </button>
      </div>
      <div className={styles.cards}>
        {renderedCars.length > 0 ? (
          renderedCars.map((item) => {
            return <Card key={item.id} {...item} />;
          })
        ) : (
          <h3 className={styles.notFound}>Not found</h3>
        )}
      </div>
    </div>
  );
}

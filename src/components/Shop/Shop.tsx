import styles from "./Shop.module.css";
import { Card } from "../Card";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { Filter } from "../Filter";

export function Shop() {
  const cars = useSelector((state: IState) => state.cars.cars);

  const [season, setSeason] = useState("All" || "Summer" || "Winter");
  const [minCoast, setMinCoast] = useState(0);
  const [maxCoast, setMaxCoast] = useState(9999999);
  const [brand, setBrand] = useState("All");
  const [renderedCars, setRenderedCars] = useState(cars);
  const [isOpened, setIsOpened] = useState(false);

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

  const onClickFilter = () => {
    setIsOpened(!isOpened);
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
      {window.innerWidth > 768 ? (
        <Filter
          season={season}
          brands={brands}
          minCoast={minCoast}
          minValue={minValue}
          maxCoast={maxCoast}
          maxValue={maxValue}
          renderedCars={renderedCars}
          onClickSeason={onClickSeason}
          onChangeBrand={onChangeBrand}
          onChangeMin={onChangeMin}
          onChangeMax={onChangeMax}
          onClickReset={onClickReset}
        />
      ) : (
        <button onClick={onClickFilter} className={styles.button_filter}>
          Show filters
        </button>
      )}
      {isOpened ? (
        <div className={styles.modal_filter}>
          <button onClick={onClickFilter} className={styles.button_filter_active}>
            Close filters
          </button>
          <Filter
            season={season}
            brands={brands}
            minCoast={minCoast}
            minValue={minValue}
            maxCoast={maxCoast}
            maxValue={maxValue}
            renderedCars={renderedCars}
            onClickSeason={onClickSeason}
            onChangeBrand={onChangeBrand}
            onChangeMin={onChangeMin}
            onChangeMax={onChangeMax}
            onClickReset={onClickReset}
          />
        </div>
      ) : null}
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

import styles from "./Filter.module.css";

interface IFilter {
  season: string;
  brands: any[];
  minCoast: number;
  minValue: any;
  maxCoast: number;
  maxValue: any;
  renderedCars: any[];
  onClickSeason(season: string): void;
  onChangeBrand(brnad: string): void;
  onChangeMin(value: string): void;
  onChangeMax(value: string): void;
  onClickReset(): void;
}

export function Filter({
  season,
  brands,
  minCoast,
  minValue,
  maxCoast,
  maxValue,
  renderedCars,
  onClickSeason,
  onChangeBrand,
  onChangeMin,
  onChangeMax,
  onClickReset,
}: IFilter) {
  return (
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
  );
}

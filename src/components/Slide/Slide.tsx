import styles from "./Slide.module.css";

export interface ISlide {
  onClickSlide(id: number): void;
  id: number;
  src: string;
  title: string;
  text: string;
  buttonText: string;
}

export function Slide({ onClickSlide, id, src, title, text, buttonText }: ISlide) {
  return (
    <div className={styles.container}>
      <img src={`${src}`} alt="" className={styles.img} />
      <div className={styles.title_container}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>{text}</p>
      </div>
      <button className={styles.btn} onClick={() => onClickSlide(id)}>
        {buttonText}
      </button>
      <div className={styles.dark}></div>
    </div>
  );
}

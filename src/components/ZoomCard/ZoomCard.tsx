import styles from "./ZoomCard.module.css";

export interface IImg {
  id: number;
  src: string;
}

interface IZoom {
  onClick(close: IImg[]): void;
  activatedImage: IImg[];
}

export function ZoomCard({ onClick, activatedImage }: IZoom) {
  const onClickClose = () => {
    let closeImg = [{ id: 999, src: "" }];
    onClick(closeImg);
  };

  return (
    <div className={styles.big_container}>
      <div className={styles.dark}></div>
      <button className={styles.button_close} onClick={onClickClose}>
        ╳
      </button>
      {activatedImage.map((item) => {
        return <img className={styles.big_image} key={item.id} src={item.src} alt="car" />;
      })}
    </div>
  );
}

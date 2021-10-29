import styles from "./Media.module.css";
import images from "./images.json";
import { useEffect, useState } from "react";
import { ZoomCard } from "../ZoomCard";
import { IImg } from "../ZoomCard/ZoomCard";

export function Media() {
  const [activatedImage, setActivatedImage] = useState([{ id: 999, src: "" }]);
  const [type, setType] = useState("All" || "Lipki" || "Pro-2");
  const [renderedImages, setImages] = useState(images);

  const onClickAll = () => {
    setImages(images);
    setType("All");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickLipki = () => {
    setType("Lipki");
    const filtredImages = images.filter((item) => item.type === "Lipki");
    setImages(filtredImages);
  };

  const onClickPro = () => {
    setType("Pro-2");
    const filtredImages = images.filter((item) => item.type === "Pro-2");
    setImages(filtredImages);
  };

  const onClickZoom = (id: number) => {
    const img = renderedImages.filter((item) => item.id === id);
    setActivatedImage(img);
  };

  const onClickClose = (closeImg: IImg[]) => {
    setActivatedImage(closeImg);
  };

  return (
    <>
      <div className={styles.container}>
        {activatedImage[0].id === 999 ? null : (
          <ZoomCard onClick={onClickClose} activatedImage={activatedImage} />
        )}
        <div className={styles.controller}>
          <button
            className={type === "All" ? styles.activated_button : styles.button}
            onClick={onClickAll}
          >
            All
          </button>
          <button
            className={type === "Lipki" ? styles.activated_button : styles.button}
            onClick={onClickLipki}
          >
            Lipki drift
          </button>
          <button
            className={type === "Pro-2" ? styles.activated_button : styles.button}
            onClick={onClickPro}
          >
            Pro-2
          </button>
        </div>
        <div className={styles.image_container}>
          {renderedImages.map((item) => {
            return (
              <img
                onClick={() => onClickZoom(item.id)}
                className={styles.image}
                key={item.id}
                src={item.src}
                alt="img"
              />
            );
          })}
        </div>
        <div className={styles.video_container}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/jxejwbhyjx8?start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/OWYxsyqkRqA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

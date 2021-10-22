import { Footer } from "../Footer";
import styles from "./Media.module.css";
import images from "./images.json";
import { useState } from "react";

export function Media() {
  const [activatedImage, setActivatedImage] = useState([{ id: 99, src: "", type: "" }]);
  const [type, setType] = useState("All" || "Lipki" || "Pro-2");
  const [renderedImages, setImages] = useState(images);

  const onclickAll = () => {
    setImages(images);
    setType("All");
  };

  const onclickLipki = () => {
    setType("Lipki");
    const filtredImages = images.filter((item) => item.type === "Lipki");
    setImages(filtredImages);
  };

  const onclickPro = () => {
    setType("Pro-2");
    const filtredImages = images.filter((item) => item.type === "Pro-2");
    setImages(filtredImages);
  };

  const onClickZoom = (id: number) => {
    const img = renderedImages.filter((item) => item.id === id);
    setActivatedImage(img);
  };

  const onClickClose = () => {
    setActivatedImage([{ id: 99, src: "", type: "" }]);
  };

  return (
    <>
      <div className={styles.container}>
        {activatedImage[0].id === 99 ? null : (
          <div className={styles.big_container}>
            <div className={styles.dark}></div>
            <button className={styles.button_close} onClick={onClickClose}>
              ╳
            </button>
            {activatedImage.map((item) => {
              return <img className={styles.big_image} key={item.id} src={item.src} alt="img" />;
            })}
          </div>
        )}
        <div className={styles.controller}>
          <button
            className={type === "All" ? styles.activated_button : styles.button}
            onClick={onclickAll}
          >
            All
          </button>
          <button
            className={type === "Lipki" ? styles.activated_button : styles.button}
            onClick={onclickLipki}
          >
            Lipki drift
          </button>
          <button
            className={type === "Pro-2" ? styles.activated_button : styles.button}
            onClick={onclickPro}
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
      <Footer />
    </>
  );
}

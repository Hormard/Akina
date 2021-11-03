import style from "./SmallSlider.module.css";
import { useRef, useState } from "react";
import { ICard } from "../Card/Card";
import { IImage } from "../../redux/reducers/cars";

interface ISlider {
  onClick(img: IImage[]): void;
  slides: ICard;
}

export function SmallSlider({ onClick, slides }: ISlider) {
  const [activatedSlide, setActivatedSlide] = useState(0);
  const btnPrev: any = useRef(null);

  const onClickNext = () => {
    let slide: number = activatedSlide;
    if (activatedSlide === slides.img.length - 1) {
      slide = 0;
      btnPrev.current.style.transform = `translateX(${slide}%)`;
      setActivatedSlide(slide);
    } else if (activatedSlide < slides.img.length - 1) {
      slide = slide + 1;
      btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  const onClickPrev = () => {
    let slide: number = activatedSlide;
    if (activatedSlide > 0) {
      slide = slide - 1;
      btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
      setActivatedSlide(slide);
    } else if (activatedSlide === 0) {
      slide = slides.img.length - 1;
      btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  const onClickChange = (id: number) => {
    let slide: number = activatedSlide;
    slide = id;
    btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
    setActivatedSlide(slide);
  };

  const onClickZoom = (id: number, src: string) => {
    let zoomImg = [{ id, src }];
    onClick(zoomImg);
  };

  return (
    <div className={style.slider}>
      <button className={style.button_prev} onClick={() => onClickPrev()}>
        ᐸ
      </button>
      <button className={style.button_next} onClick={() => onClickNext()}>
        ᐳ
      </button>
      <div className={style.nav_slide}>
        {slides.img.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => onClickChange(item.id)}
              className={
                item.id === Math.round(activatedSlide) ? style.activated_circle : style.circle
              }
            ></button>
          );
        })}
      </div>
      <div className={style.slider_img} ref={btnPrev}>
        {slides.img.map((slide) => {
          return (
            <img
              onClick={() => onClickZoom(slide.id, slide.src)}
              className={style.img}
              src={slide.src}
              alt="car"
            />
          );
        })}
      </div>
    </div>
  );
}

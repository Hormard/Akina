import style from "./Slider.module.css";
import { useRef, useState } from "react";
import { Slide } from "../Slide/Slide";
import { useHistory } from "react-router";
import slides from "./slides.json";

export function Slider() {
  const [activatedSlide, setActivatedSlide] = useState(0);
  const btnPrev: any = useRef(null);
  const history = useHistory();

  const onClickNext = () => {
    let slide: number = activatedSlide;
    if (activatedSlide === slides.length - 0.98) {
      slide = 0;
      btnPrev.current.style.transform = `translateX(${slide}%)`;
      setActivatedSlide(slide);
    } else if (activatedSlide < slides.length - 1) {
      slide = slide + 1.01;
      btnPrev.current.style.transform = `translateX(${-33 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  const onClickPrev = () => {
    let slide: number = activatedSlide;
    if (activatedSlide > 0) {
      slide = slide - 1.01;
      btnPrev.current.style.transform = `translateX(${-33 * slide}%)`;
      setActivatedSlide(slide);
    } else if (activatedSlide === 0) {
      slide = slides.length - 0.98;
      btnPrev.current.style.transform = `translateX(${-33 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  const onClickChange = (id: number) => {
    let slide: number = activatedSlide;
    if (id === 0) {
      slide = 0;
      btnPrev.current.style.transform = `translateX(${slide}%)`;
      setActivatedSlide(slide);
    } else {
      slide = id + id / 100;
      btnPrev.current.style.transform = `translateX(${-33 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  const onclickSlide = (id: number) => {
    if (id === 0) {
      history.push(`/signUp/${id}`);
    } else if (id === 1) {
      history.push(`/signUp/${id}`);
    } else if (id === 2) {
      history.push("/market");
    }
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
        {slides.map((item) => {
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
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.id}
              onClickSlide={onclickSlide}
              id={slide.id}
              src={slide.src}
              title={slide.title}
              text={slide.text}
              buttonText={slide.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
}

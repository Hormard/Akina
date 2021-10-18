import style from "./Slider.module.css";
import img1 from "../../assets/images/slider/slide_1.jpg";
import img2 from "../../assets/images/slider/slide_2.jpg";
import img3 from "../../assets/images/slider/slide_3.jpg";
import { useEffect, useRef, useState } from "react";

const slides: any[] = [
  <img key={1} className={style.img} src={img1} alt="" />,
  <img key={2} className={style.img} src={img2} alt="" />,
  <img key={3} className={style.img} src={img3} alt="" />,
];

export function Slider() {
  const [activatedSlide, setActivatedSlide] = useState(0);
  const btnPrev: any = useRef(null);

  const onClickNext = () => {
    let slide: number = activatedSlide;
    if (slide === slides.length - 1) {
      slide = 0;
      btnPrev.current.style.transform = `translateX(${slide}%)`;
      setActivatedSlide(slide);
    } else if (activatedSlide < slides.length - 1) {
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
      slide = slides.length - 1;
      btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
      setActivatedSlide(slide);
    }
  };

  useEffect(() => {
    let slide: number = activatedSlide;
    setInterval(() => {
      if (slide === slides.length - 1) {
        slide = 0;
        btnPrev.current.style.transform = `translateX(${slide}%)`;
        setActivatedSlide(slide);
      } else if (activatedSlide < slides.length - 1) {
        slide = slide + 1;
        btnPrev.current.style.transform = `translateX(${-100 * slide}%)`;
        setActivatedSlide(slide);
      }
    }, 15000);
  }, []);

  return (
    <div className={style.slider}>
      <button className={style.button_prev} onClick={() => onClickPrev()}>
        ᐸ
      </button>
      <button className={style.button_next} onClick={() => onClickNext()}>
        ᐳ
      </button>
      <div className={style.slider_img} ref={btnPrev}>
        {slides.map((slide) => {
          return slide;
        })}
      </div>
    </div>
  );
}

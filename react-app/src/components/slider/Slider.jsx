import style from "./Slider.module.css";
import { useEffect } from "react";
import { dataSlider, settingsSlider } from "../../data/dataSlider";
import "../../assets/libs/swiper/swiper-bundle.min.js";
import "../../assets/libs/swiper/swiper-bundle.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  useEffect(() => {
    const showSlider = new Swiper("#item-slider", settingsSlider);
  }, []);

  return (
    <div className={style.slider}>
      <div className={style.swiper_container} id="item-slider">
        <div className="swiper-wrapper">
          {dataSlider.map((item, index) => (
            <div className={`${style.slider_swiper} swiper-slide`} key={index}>
              <div className={style.slider__item}>
                <div className={style.slider__item__img}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={style.slider__item__title}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.navigation}>
        <div className={`${style.navigation__prev} xu-navigation__prev`}>
          <div className={style.navigation__wrapper}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </div>
        </div>
        <div className={`${style.navigation__next} xu-navigation__next`}>
          <div className={style.navigation__wrapper}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

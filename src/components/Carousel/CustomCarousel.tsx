import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./CustomCarousel.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Button from "../Button/Button";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import SwiperCore from "swiper";
import ButtonCircle from "../ButtonCircle/ButtonCircle";

interface CarouselProps {
  items: string[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);
  const paginationLabel = React.useRef<HTMLHeadingElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if(navigation){
        navigation.prevEl = navPrevButton.current;
        navigation.nextEl = navNextButton.current;

      }
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <div className={styles.carousel}>
      <Swiper
        onBeforeInit={onBeforeInit}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {items.map((slide) => (
          <SwiperSlide key={slide}>
            {({ isActive }) => (
              <div className={isActive ? "slideItem active" : "slideItem"}>
                Current slide is {isActive ? "active" : "not active"}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.carousel_nav}>

        <ButtonCircle ref={navPrevButton} theme="dark">
        <WestIcon style={{ color:  'var(--theme-accent)'  }} />
        </ButtonCircle>
        <ButtonCircle theme="dark" ref={navNextButton}>
        <EastIcon style={{ color: 'var(--theme-accent)' }} />
        </ButtonCircle>
      </div>
    </div>
  );
};

export default CustomCarousel;

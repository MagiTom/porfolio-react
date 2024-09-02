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

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== "boolean") {
      const navigation = Swiper.params.navigation;
      if (navigation) {
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
      {/* <div className={styles.carousel_overlay}></div> */}
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
              <div style={{backgroundImage: `url(https://fastly.picsum.photos/id/409/200/200.jpg?hmac=AY8BYOBixnRqVEMdEhYmw49e-6qu3M3zf_xXjkAuHHc)`}} className={isActive ? "slideItem active" : "slideItem"}>
              
                  <div className={styles.carousel_content}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam dictum mattis velit, sit amet faucibus felis
                      iaculis nec. Nulla
                    </p>
                    <div className={styles.carousel_buttons}>
                      <Button theme="light" onClick={() => alert("Clicked!")}>
                        <span>Projects</span>
                      </Button>
                      <ButtonCircle
                        theme="light"
                        onClick={() => alert("Clicked!")}
                      >
                        <EastIcon style={{ color: "var(--theme-medium)" }} />
                      </ButtonCircle>
                    </div>
             
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.carousel_nav}>
        <ButtonCircle ref={navPrevButton} theme="dark">
          <WestIcon style={{ color: "var(--theme-accent)", margin: "10px" }} />
        </ButtonCircle>
        <ButtonCircle theme="dark" ref={navNextButton}>
          <EastIcon style={{ color: "var(--theme-accent)", margin: "10px" }} />
        </ButtonCircle>
      </div>
    </div>
  );
};

export default CustomCarousel;

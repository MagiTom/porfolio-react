import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CustomCarousel.scss";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../Button/Button";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import SwiperCore from "swiper";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import Projects from "../../constans/projects";
import { Project } from "../../constans/projects";

const importImage = (path: string) => {
  try {
    return require(`../../assets/${path}`);
  } catch (e) {
    console.error(`Image not found: ${path}`);
    return '';
  }
};

interface CarouselProps {
  items: Project[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);
  const maxLength = 150;

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
    <div className="carousel">
      <div className="carousel_overlay"></div>
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div      style={{
                backgroundImage: `url(${importImage(slide.src)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} className={isActive ? "slideItem active" : "slideItem"}>
              
                  <div className="carousel_content">
                    <h5>{slide.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: slide.description.length > maxLength ? `${slide.description.substring(0, maxLength)}...` : slide.description }} />
                    <div className="carousel_buttons">
                      <Button theme="light" onClick={() => window.open(slide.github, "_blank")}>
                        <span>Read more</span>
                      </Button>
                      <ButtonCircle
                        theme="light"
                        onClick={() => window.open(slide.src, "_blank")}
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

      <div className="carousel_nav">
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

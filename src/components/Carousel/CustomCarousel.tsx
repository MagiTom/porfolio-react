import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import React from "react";
import { useTranslation } from "react-i18next";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project } from "../../constans/projects";
import Button from "../Button/Button";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import "./CustomCarousel.scss";

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
  const { t } = useTranslation();
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
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <div className="carousel">
      <div className="carousel_overlay"></div>
      <Swiper
        onBeforeInit={onBeforeInit}
        grabCursor={true}
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={pagination}
        navigation={{ prevEl: navPrevButton.current, nextEl: navNextButton.current }}
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
                    <h5>{t(`${slide.title}`)}</h5>
                    <p dangerouslySetInnerHTML={{ __html: t(`${slide.description}`).length > maxLength ? `${t(`${slide.description}`).substring(0, maxLength)}...` : t(`${slide.description}`) }} />
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
        <span>
        <ButtonCircle ref={navPrevButton} theme="dark">
          <WestIcon style={{ color: "var(--theme-accent)", margin: "10px" }} />
        </ButtonCircle>
        </span>
        <span>
        <ButtonCircle theme="dark" ref={navNextButton}>
          <EastIcon style={{ color: "var(--theme-accent)", margin: "10px" }} />
        </ButtonCircle>
        </span>
      </div>
    </div>
  );
};

export default CustomCarousel;

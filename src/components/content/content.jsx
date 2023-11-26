import { useState } from "react";
import checkData from '../hoc/checkData-hoc.jsx';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { imgUrl } from "../../static";

const ContentList = (props)=>{
  const [breakpoints, setBreakpoints] = useState({
    200: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    1320: {
      slidesPerView: 4.5,
    },
    1600: {
      slidesPerView: 5.5,
    },
  });
  const {type, content} = props;
  
  return (
    <section className="content">
      <Link to={"/" + type} className="title">
        {type == "movie" ? "Фильмы" : "Сереалы"}
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-right"
          className="title__icon"
        />
      </Link>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={5.5}
        navigation
        breakpoints={breakpoints}
      >
        {content.map((item) => {
          return (
            <SwiperSlide className="content__item" key={item.id}>
              <img src={imgUrl+item.poster_path} alt="" className="content__img" />
              <Link
                to={`/${type}/${item.id}`}
                className="content__media-link"
              ></Link>
              <div className="content__arrow"></div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="content__item">
          <Link to={"/" + type} className="content__link">
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              className="content__icon"
            />
            <span>{type == "movie" ? "Все фильмы" : "Все сериалы"}</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default checkData(ContentList)
import { imgUrlFull, imgUrl } from "../../static";

const UpcomingItem = ({ current, next, nextIndex, fade, nextSlide }) => {
  const { backdrop_path, title, overview } = current;
  return (
    <div className={`upcoming__item upcoming__item_${fade}`}>
      <img src={imgUrlFull + backdrop_path} alt="" className="upcoming__bg"/>
      <div className="upcoming__content">
        <h1 className="upcoming__title text-limit">{title}</h1>
        <p className="upcoming__desc text-limit">{overview}</p>
        {/* <BtnMore :id="movie.id"/> */}
      </div>
      <div className="upcoming__next" onClick={()=>{nextSlide(nextIndex)}}>
        <img
          src={imgUrl + next.backdrop_path}
          alt=""
          className="upcoming__next-img"
        />
        <div className="upcoming__next-content">
          <p className="upcoming__next-name">Следующий</p>
          <h3 className="upcoming__next-title">{next.title}</h3>
          <div className="upcoming__next-line"></div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingItem;

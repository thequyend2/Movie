import React, { useEffect } from "react";
import {
  StyledListByImage,
  StyledListByText,
  StyledListByTextRanking,
  StyledListByTextInfo,
} from "./styles/MovieList.styled";
import PosterNull from "./PosterNull";
import ImageLoading from "../hooks/ImageLoading";

const MovieList = ({ datas, idx, setSelectedMovieID, viewBy }) => {
  const { ImageLoad, isImageLoading } = ImageLoading();
  console.log("datas===", datas);
  useEffect(() => {
    if (datas.poster_path !== null) {
      ImageLoad("https://image.tmdb.org/t/p/w500/" + datas.poster_path);
    }
  }, [datas]);

  const onClickHandler = () => {
    setSelectedMovieID(datas);
  };

  return viewBy ? (
    <StyledListByImage>
      {datas.poster_path !== null ? (
        <div>
          <img
            className={isImageLoading ? "loading" : "loading--completed"}
            src={"https://image.tmdb.org/t/p/w500/" + datas.poster_path}
            alt={datas.title}
            onClick={onClickHandler}
          />
          <span>{datas.title}</span>
        </div>
      ) : (
        <div onClick={onClickHandler}>
          <PosterNull title={datas.title} />
        </div>
      )}
    </StyledListByImage>
  ) : (
    <StyledListByText onClick={onClickHandler}>
      <StyledListByTextRanking>{idx}</StyledListByTextRanking>
      {datas.poster_path !== null ? (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + datas.poster_path}
          alt={datas.title}
        />
      ) : (
        ""
      )}
      <StyledListByTextInfo>
        <h4>{datas.title}</h4>
        <p>
          <span>Average</span> {datas.vote_average}
        </p>
        <p>
          <span>Release Date</span>{" "}
          {datas.release_date && datas.release_date.replace(/-/g, "/")}
        </p>
      </StyledListByTextInfo>
    </StyledListByText>
  );
};

export default MovieList;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import {
  StyledRecommendedMovie,
  StyledRecommendedText,
  StyledRecommendedButton,
  StyledRecommendedImage,
} from "./styles/RecommendedMovie.styled";

import ImageLoading from "../hooks/ImageLoading";
import PosterNull from "./PosterNull";

const RecommendedMovie = ({ datas, setSelectedMovieID }) => {
  const { ImageLoad, isImageLoading } = ImageLoading();

  const [randomNum, setRandomNum] = useState(null);

  const getRandomInt = (parentElement) => {
    let parentIndex = Math.floor(Math.random() * parentElement);

    let childIndex = Math.floor(
      Math.random() * (datas[parentIndex].length - 1)
    );
    return datas[parentIndex][childIndex];
  }

  useEffect(() => {
    refreshOnclick();
  }, [datas]);

  useEffect(() => {
    if (randomNum !== null && randomNum.backdrop_path !== null) {
      ImageLoad(`https://image.tmdb.org/t/p/w500/${randomNum.backdrop_path}`);
    }
  }, [randomNum]);

  const contentOnClick = () => {
    setSelectedMovieID(randomNum);
  };

  const refreshOnclick = () => {
    setRandomNum(getRandomInt(datas.length - 1));
  };

  return (
    randomNum !== undefined &&
    randomNum !== null && (
      <StyledRecommendedMovie>
        <StyledRecommendedText>
          <h1>Recommended</h1>
          <h3>{randomNum.title}</h3>
          <StyledRecommendedButton>
            <button onClick={contentOnClick}>More Detail</button>
            <button onClick={refreshOnclick}>
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </StyledRecommendedButton>
        </StyledRecommendedText>
        <StyledRecommendedImage
          className={
            randomNum.backdrop_path !== null && isImageLoading
              ? "loading"
              : "loading--completed"
          }
        >
          {randomNum.backdrop_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${randomNum.backdrop_path}`}
              alt={randomNum.title}
            />
          ) : (
            <PosterNull title={randomNum.title} />
          )}
        </StyledRecommendedImage>
      </StyledRecommendedMovie>
    )
  );
};

export default RecommendedMovie;

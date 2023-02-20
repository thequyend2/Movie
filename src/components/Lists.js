import React, { useState, useEffect } from "react";
import {
  StyledSectionSearch,
  StyledPreventAutoFit,
  StyledSearchDescription,
  StyledSearchDescriptionText,
  StyledContinueBox,
  StyledContinueBtn,
  StyledQuryValue,
  StyledRecommended,
} from "./styles/Page.styled";

import APIUtils from "../api/APIUtils";
import MovieList from "./MovieList";
import RecommendedMovie from "./RecommendedMovie";
import Tip from "./Tip";
import Loading from "./Loading";

const Lists = ({
  pageParent,
  parameter,
  query,
  path,
  viewBy,
  setSelectedMovieID,
}) => {
  const { datas, isLoading, requestMovie } = APIUtils();

  const [obj, setObj] = useState({});

  useEffect(() => {
    if (query !== undefined) {
      if (!obj.hasOwnProperty(query)) {
        setObj({
          ...obj,
          [query]: {
            data: [],
            page: 1,
            total: 0,
            continue: true,
          },
        });
      }
    }
  }, [query]);

  useEffect(() => {
    if (datas !== undefined && query !== undefined) {
      setObj({
        ...obj,
        [query]: {
          ...obj[query],
          data: [...obj[query].data, datas.results],
          total: datas.total_results,
          continue: datas.total_pages > obj[query].page ? true : false,
        },
      });
    }
  }, [datas]);

  const nextPageClickHandler = () => {
    setObj({
      ...obj,
      [query]: {
        ...obj[query],
        page: obj[query].page + 1,
      },
    });
  };

  useEffect(() => {
    if (obj.hasOwnProperty(query)) {
      if (obj[query].page !== obj[query].data.length) {
        fetchItem();
      }
    }
  }, [obj]);

  const fetchItem = () =>
    requestMovie(`${parameter}&page=${obj[query].page}&`, path);

  return (
    <StyledSectionSearch>
      {obj.hasOwnProperty(query) &&
        (obj[query].data[0] === undefined ? (
          <Loading />
        ) : obj[query].data[0].length !== 0 ? (
          <>
            {pageParent === "HOME" ? (
              <StyledRecommended>
                {obj[query].data.length !== 0 && (
                  <>
                    <RecommendedMovie
                      datas={obj[query].data}
                      setSelectedMovieID={(id) => setSelectedMovieID(id)}
                    />
                  </>
                )}
                <span />
              </StyledRecommended>
            ) : pageParent === "SEARCH" ? (
              <StyledQuryValue>
                <p>Your have searched</p>
                <h3>{query}</h3>
                <p>Found {obj[query].total} movies</p>
              </StyledQuryValue>
            ) : (
              ""
            )}

            {obj[query].data.map((pageArr, page) => {
              return pageArr.map((item, idx) => {
                return (
                  <MovieList
                    key={idx + item.title}
                    datas={item}
                    idx={idx + 1 + page * 20}
                    viewBy={viewBy}
                    setSelectedMovieID={(query) => setSelectedMovieID(query)}
                  />
                );
              });
            })}
            <StyledPreventAutoFit />

            {isLoading ? (
              <Loading />
            ) : (
              datas !== undefined && (
                <StyledContinueBox>
                  <StyledContinueBtn
                    className={obj[query].continue ? "visible" : ""}
                    onClick={nextPageClickHandler}
                  >
                    SEE MORE
                  </StyledContinueBtn>
                </StyledContinueBox>
              )
            )}
          </>
        ) : (
          <StyledSearchDescription>
            <StyledSearchDescriptionText>
              <h2>No movie data found</h2>
              {pageParent === "SEARCH" && (
                <p>
                  You have searched: <span>{query}</span>
                </p>
              )}
            </StyledSearchDescriptionText>
            <Tip />
          </StyledSearchDescription>
        ))}
    </StyledSectionSearch>
  );
};

export default Lists;

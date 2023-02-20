import React, { useState } from "react";
import { StyledMain } from "../../components/styles/Page.styled";
import Content from "../../components/Content";
import PopupBackground from "../../components/PopupBackground";
import Features from "./Features";

import Lists from "../../components/Lists";

import { request, sortBy } from "../../data/data";

const Main = ({ genreID }) => {
  const [setlectedMovieID, setSelectedMovieID] = useState(null);

  const [sortByURL, setSortByURL] = useState("popular");

  const [viewBy, setViewBy] = useState(true);

  return (
    <StyledMain>
      <Features
        sortByURL={sortByURL}
        setSortByURL={(str) => setSortByURL(str)}
        viewBy={viewBy}
        setViewBy={(bool) => setViewBy(bool)}
      />

      <Lists
        pageParent="HOME"
        parameter={request[genreID].URL}
        query={genreID + sortByURL}
        path={sortBy[sortByURL]}
        viewBy={viewBy}
        setSelectedMovieID={(id) => setSelectedMovieID(id)}
      />

      {setlectedMovieID !== null && (
        <>
          <Content
            data={setlectedMovieID}
            setSelectedMovieID={(off) => setSelectedMovieID(off)}
          />
          <PopupBackground
            setSelectedMovieID={(off) => setSelectedMovieID(off)}
          />
        </>
      )}
      <span></span>
    </StyledMain>
  );
};

export default Main;

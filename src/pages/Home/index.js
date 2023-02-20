import React, { useState } from "react";
import { HomePageWrapper } from "./styles";
import Aside from "./components/Aside";
import Main from "./components/Main";

const Home = () => {
  const [genreID, setGenreID] = useState(0);

  return (
    <HomePageWrapper>
      <Aside
        genreID={genreID}
        setGenreID={(int) => {
          setGenreID(int);
        }}
      />
      <Main genreID={genreID} />
    </HomePageWrapper>
  );
};

export default Home;

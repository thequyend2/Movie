import React, { useState } from "react";
import { StyledPage } from "../../components/styles/Page.styled";
import Aside from "./Aside";
import Main from "./Main";

const Home = () => {
  const [genreID, setGenreID] = useState(0);

  return (
    <StyledPage>
      <Aside
        genreID={genreID}
        setGenreID={(int) => {
          setGenreID(int);
        }}
      />
      <Main genreID={genreID} />
    </StyledPage>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(20%) blur(5px);
  cursor: pointer;
  z-index: 997;
`;

const PopupBackground = ({ setSelectedMovieID }) => {
  document.body.style.overflow = "hidden";

  const onClickHandler = () => {
    document.body.style.overflow = "auto";

    setSelectedMovieID(null);
  };
  return <StyledPopup onClick={onClickHandler}>PopupBackground</StyledPopup>;
};

export default PopupBackground;

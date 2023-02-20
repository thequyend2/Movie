import React from "react";

import {
  StyledInfo,
  StyledInfoSection,
  StyledInfoHeader,
  StyledInfoMain,
  StyledInfoImage,
} from "../../components/styles/Info.styled";

import logo from "../../assets/main_logo.png";

const Info = () => {
  return (
    <StyledInfo>
      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Information</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Simple tips for ease of use</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>

      <StyledInfoSection>
        <StyledInfoHeader>
          <h2>Application Programming Interface</h2>
        </StyledInfoHeader>
        <StyledInfoMain>
          <StyledInfoImage>
            <img src={logo} alt="CM_logo" />
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              className="logo"
              alt="DB-logo"
            />
          </StyledInfoImage>
          <p>
            WLorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </StyledInfoMain>
      </StyledInfoSection>
    </StyledInfo>
  );
};

export default Info;

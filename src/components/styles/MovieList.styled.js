import styled, { keyframes } from "styled-components";

const movieListAni = keyframes`
0% {
    transform: translateY(0);
}
20% {
    transform: translateY(5%)
}
60% {
    transform: translateY(-3%)
}
80% {
    transform: translateY(1%)
}
100% {
    transform: translateY(0%);
}
`;

export const StyledListByImage = styled.article`
  display: flex;
  flex: 0 0 20%;
  /* padding-bottom: 30%; */
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.constDark};
  transition: 0.3s filter;
  margin-left: auto ;
  margin-right: auto;
  /* border-radius: 4px;
  width: 100% / 4; */

  span {
      color: white;
      font-size: 1rem;
      margin-top: 4px;
      padding: 4px;
    }

  div {
    /* width: 100%;
    height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
    /* position: absolute; */
    width: 100%;
    min-width: 100%;
    max-height: 85%;
    min-height: 85%;
    object-fit: cover;
    border-radius: 4px;

    

    
  }
  &:hover {
      filter: brightness(130%);

      span {
        color: rgb(136, 133, 37);
      }
    }
  }

  

  .loading {
    filter: blur(10px);
    &--completed {
      filter: blur(0px);
      transition: 0.3s filter;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex: 0 0 25%;
    /* padding-bottom: 45%; */
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0 0 50%;
    /* padding-bottom: 70%; */
  }
`;

export const StyledListByText = styled.article`
  display: flex;
  flex: 1 1 100%;
  height: 8rem;
  align-items: center;
  outline: 1px solid ${({ theme }) => theme.colors.reversedClr};
  background-color: ${({ theme }) => theme.colors.light};
  z-index: 8;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    z-index: 9;
    animation: 0.3s ${movieListAni};
  }

  img {
    height: 100%;
    width: 84px;
  }
`;

export const StyledListByTextRanking = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  height: 100%;
  display: flex;
  width: 2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.constLight};
  text-shadow: 1px 1px 1px black;
  min-width: 40px;
`;

export const StyledListByTextInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  h4 {
    flex: 1 1 100%;
    color: ${({ theme }) => theme.colors.reversedClr};
  }

  p {
    color: ${({ theme }) => theme.colors.reversedClr};
  }

  span {
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
  }
`;

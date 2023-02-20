import React, { useState, useEffect } from "react";
import logo from "../../assets/main_logo.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  StyledAside,
  StyledAsideLogo,
  StyledAsideHistory,
  StyledAsideHistoryText,
} from "../../components/styles/Aside.styled";
import Input from "../../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [historyArray, setHistoryArray] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      setHistoryArray((oldArray) => {
        oldArray.map((item, idx) => {
          if (oldArray[idx] === id) {
            historyRemoveByIndex(idx + 1);
          }
        });

        if (oldArray.length >= 5) {
          historyRemoveByIndex(oldArray.length);
        }

        return [id, ...oldArray];
      });
    }
  }, [id]);

  const historyRemoveByIndex = (index) => {
    setHistoryArray((oldArray) => {
      return oldArray.filter((item, idx) => idx !== index);
    });
  };

  return (
    <StyledAside>
      <StyledAsideLogo>
        <img src={logo} alt="CM_logo" />
      </StyledAsideLogo>
      <h1 className="searchpage">SEARCH</h1>
      <Input searchpage={true} />
      <span></span>
      {historyArray.length !== 0 && <h3 className="history">HISTORY</h3>}
      <StyledAsideHistory>
        {historyArray.map((item, idx) => {
          return (
            <StyledAsideHistoryText key={idx + item}>
              <p onClick={() => navigate(item)}>{item}</p>
              <div onClick={() => historyRemoveByIndex(idx)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </StyledAsideHistoryText>
          );
        })}
      </StyledAsideHistory>
    </StyledAside>
  );
};

export default Aside;

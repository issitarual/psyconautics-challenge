import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header(prop: { setCharacter: Function }) {
  let history = useHistory();
  let location = useLocation();
  const showInput = location.pathname === "/";
  const [search, setSearch] = useState("");
  return (
    <HeaderContainer>
      <img
        src="https://gamehag.com//img/rewards/logo/psychonauts.png"
        alt="psychonauts"
        onClick={() => history.push("/")}
      />
      <input
        autoFocus
        type="text"
        placeholder="Procure por um personagem"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          prop.setCharacter(e.target.value);
        }}
        style={{ display: `${showInput ? "block" : "none"}` }}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  top: 0;
  left: 0;
  background-color: #011311;
  border-bottom: 2px solid #3b1a3a;
  img {
    width: 300px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
  input {
    width: 95%;
    padding: 10px;
    background-color: #22272e;
    border: 1px solid #4a4f54;
    border-radius: 5px;
    color: #9da7b2;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    ::-webkit-input-placeholder {
      color: #9da7b2;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
    }
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

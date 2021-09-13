import styled from "styled-components";
import { useHistory } from "react-router-dom"

export default function Footer () {
    let history = useHistory();
  return (
    <FooterContainer>
      <Characters onClick={() => history.push("/")}>Personagens</Characters>
      <div>Meus Favoritos</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  bottom: 0;
  left: 0;
  background-color: #011311;
  box-shadow: 0 0 1em #3b1a3a;
  div {
    width: 50%;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #fdea36;
    text-shadow: 0.1em 0.1em 0.2em #36a376;
    cursor: pointer;
  }
`;

const Characters = styled.div`
    border-right: 3px solid #3b1a3a;
`;
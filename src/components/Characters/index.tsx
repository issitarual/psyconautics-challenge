import styled from "styled-components";
import Character from "./Character";
import { useLocation } from "react-router-dom";

export default function CharactersList(prop: {
  characters: { name: string; img: string }[] | never[];
}) {
  let location = useLocation();
  const showInput = location.pathname === "/";
  return (
    <CharactersContainer
      style={{
        justifyContent:
          prop.characters.length === 1 ? "center" : "space-between",
        margin: showInput? "185px 20px 70px 20px": "150px 20px 70px 20px"
      }}
    >
      {prop.characters.length === 0 ? (
        <NotFound>Nenhum personagem foi encontrado</NotFound>
      ) : (
        prop.characters.map((character, i) => (
          <Character key={i} character={character} />
        ))
      )}
    </CharactersContainer>
  );
}

const CharactersContainer = styled.main`
  color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const NotFound = styled.p`
  color: #adbac7;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  width: 100%;
`;

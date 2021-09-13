import styled from "styled-components";
import Character from "./Character";

export default function CharactersList(prop: {
  characters: { name: string; img: string }[] | never[];
}) {
  console.log(prop.characters);
  return (
    <CharactersContainer style={{justifyContent: prop.characters.length === 1? "center": "space-between"}}>
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
  margin: 185px 20px 70px 20px;
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

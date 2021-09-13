import styled from "styled-components";
import Character from "./Character";

export default function CharactersList (prop: {characters: {name: string, img: string}[] | never[]}){
    console.log(prop.characters);
    return(
        <CharactersContainer>
            {prop.characters.length === 0?
            <NotFound>Nenhum personagem foi encontrado</NotFound>:
            prop.characters.map((character, i) => <Character key={i} character={character} />)}
        </CharactersContainer>
    )
}

const CharactersContainer = styled.main`
    margin: 185px 20px 70px 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const NotFound = styled.p`
        color: #ADBAC7;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 30px;
        text-align: center;
        width: 100%;
`

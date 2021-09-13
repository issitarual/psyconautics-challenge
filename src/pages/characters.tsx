import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import CharactersList from "../components/Characters";

export default function Characters(prop: { searchCharacter: string }) {
  const [characters, setCarachters] = useState([]);
  useEffect(() => {
    axios
      .get("https://psychonauts-api.herokuapp.com/api/characters")
      .then(({ data }) => setCarachters(data))
      .catch((error) => console.log(error));
  }, []);

  function getCharacter(
    characterName: string,
    characters: never[] | { name: string; img: string }[]
  ) {
    if (characterName.length === 0) return characters;
    else {
      let filterCharacterByName = characters.filter((character) =>
        character.name.includes(characterName)
      );
      if (filterCharacterByName) return filterCharacterByName;
      else return [];
    }
  }

  const search = getCharacter(prop.searchCharacter, characters);
  console.log(characters);
  return (
    <>
      <CharactersList characters={search} />
    </>
  );
}

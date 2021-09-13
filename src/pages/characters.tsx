import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import CharactersList from "../components/Characters";
import Loading from "../components/Loading";

export default function Characters(prop: { searchCharacter: string }) {
  const [characters, setCarachters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://psychonauts-api.herokuapp.com/api/characters")
      .then(({ data }) => {
        setCarachters(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function getCharacter(
    characterName: string,
    characters: never[] | { name: string; img: string }[]
  ) {
    if (characterName.length === 0) {
      return characters;
    } else {
      let filterCharacterByName = characters.filter((character) =>
        character.name.includes(characterName)
      );
      if (filterCharacterByName) {
        return filterCharacterByName;
      } else {
        return [];
      }
    }
  }

  const search = getCharacter(prop.searchCharacter, characters);
  console.log(characters);
  return <>{loading ? <Loading /> : <CharactersList characters={search} />}</>;
}

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterData from "../components/Character";
import Loading from "../components/Loading";

export default function Character() {
  const { name }: { name: string } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://psychonauts-api.herokuapp.com/api/characters?name=${name}`)
      .then(({ data }) => {
        setCharacter(data);
        setLoading(!loading);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(character);
  return (
    <>{loading ? <Loading /> : <CharacterData character={character} />}</>
  );
}

import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CharactersList from "../components/Characters";

export default function Favorities() {
  const favorities = useSelector((state: RootState) => state.favoties);
  return (
    <>
      <CharactersList characters={favorities} />
    </>
  );
}

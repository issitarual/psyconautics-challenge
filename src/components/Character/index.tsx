import styled from "styled-components";
import { useState } from "react";
import PsyPowers from "./PsyPower";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { toAdd, toDeleted } from "../../services/favorite/FavoriteSlice";

export default function CharacterData(prop: { character: {} }) {
  const { gender, img, name, psiPowers, _id } = prop.character as {
    _id: number;
    gender: string;
    img: string;
    name: string;
    psiPowers: [];
  };

  const [power, setPower] = useState(0);
  const dispatch = useDispatch();
  const addCharacter = (character: {
    name: string;
    _id: number;
    img: string;
  }) => {
    dispatch(toAdd(prop.character));
  };
  const removeCharacter = (character: {
    name: string;
    _id: number;
    img: string;
  }) => {
    dispatch(toDeleted(prop.character));
  };
  const favorities = useSelector((state: RootState) => state.favoties);
  return (
    <>
      <CharacterContainer>
        <img src={img} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>
            <strong>Gênero</strong> <br />
            {gender === "male" ? "Masculino" : "Feminino"}
          </p>
          <p>
            <strong>PsyPowers</strong> <br />
            {psiPowers.length === 0
              ? "Nenhum"
              : psiPowers.map((psypower, i) => (
                  <button key={i} onClick={() => setPower(i + 1)}>
                    {i + 1}
                  </button>
                ))}
          </p>
          {favorities.find((favorite) => favorite.name === name) ? (
            <button onClick={() => removeCharacter({ name, img, _id })}>
              Remover
            </button>
          ) : (
            <button onClick={() => addCharacter({ name, img, _id })}>
              Adicionar
            </button>
          )}
        </div>
      </CharacterContainer>
      {power ? (
        <PsyPowers power={psiPowers[power - 1]} setPower={setPower} />
      ) : null}
    </>
  );
}

const CharacterContainer = styled.main`
  margin: 150px 20px 70px 20px;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  img {
    border-radius: 5px;
    border: 1px solid #4a4f54;
    width: 25%;
  }
  div {
    margin-left: 20px;
    width: 100%;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  }
  h1 {
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 25px;
    text-transform: capitalize;
  }
  p {
    margin: 10px 0;
    font-size: 15px;
    text-transform: capitalize;
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    line-height: 20px;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  button {
    padding: 8px;
    border: 1px solid #adbac7;
    border-radius: 5px;
    background-color: #22272e;
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 12px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

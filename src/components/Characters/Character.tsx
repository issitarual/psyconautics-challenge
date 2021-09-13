import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Character(prop: {
  character: { img: string; name: string };
}) {
  let history = useHistory();
  const { img, name } = prop.character;
  return (
    <CharacterContainer onClick={() => history.push(`/${name}`)}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </CharacterContainer>
  );
}

const CharacterContainer = styled.div`
  height: 300px;
  width: calc(25% - 10px);
  border: 1px solid #4a4f54;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: calc(50% - 15px);
  }
  &:hover {
    background-color: #011412;
  }
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    object-position: 50% 0px;
    border-radius: 5px;
    border: 1px solid #4a4f54;
  }
  p {
    margin-top: 10px;
    color: #adbac7;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: capitalize;
  }
`;

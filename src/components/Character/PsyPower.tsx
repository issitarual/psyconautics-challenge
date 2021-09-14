import styled from "styled-components";

export default function PsyPowers(prop: {
  power: {} | never;
  setPower: Function;
}) {
  const { img, name, description } = prop.power as {
    img: string;
    name: string;
    description: string;
  };
  return (
    <PsyPowerCOntainer onClick={() => prop.setPower(0)}>
      <div>
        <h2>{name}</h2>
        <span>
          <img src={img} alt={name} />
          <p>{description}</p>
        </span>
      </div>
    </PsyPowerCOntainer>
  );
}

const PsyPowerCOntainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #adbac7;
  div {
    padding: 12px;
    border: 1px solid #adbac7;
    border-radius: 5px;
    background-color: #292e35;
  }
  h2 {
    font-weight: bold;
    text-transform: capitalize;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  img {
    border-radius: 5px;
    margin-right: 10px;
  }
`;

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import axios from "axios";
import Character from "../pages/Character";
import { useParams } from "react-router";
jest.mock('axios');
jest.mock('useParams');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedParams = useParams as {name: string};

const character = {
  gender: "male",
  img: "https://psychonauts-api.herokuapp.com/images/api/characters/razputin-aquato.png",
  _id: "60b545a812a35d412cf0fa44",
  name: "razputin aquato",
  psiPowers: [
    {
      description: "Allows the user to see through the minds of others.",
      img: "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
      _id: "60b545a812a35d412cf0fa45",
      name: "clairvoyance",
    },
    {
      description: "Allows the user to confuse enemies.",
      img: "https://psychonauts-api.herokuapp.com/images/api/confusion.png",
      _id: "60b545a812a35d412cf0fa46",
      name: "confusion",
    },
    {
      description:
        "Allows the user to turn invisible for a short period of time.",
      img: "https://psychonauts-api.herokuapp.com/images/api/invisibility.png",
      _id: "60b545a812a35d412cf0fa47",
      name: "invisibility",
    },
    {
      description: "Allows the user to levitate using a levitation ball.",
      img: "https://psychonauts-api.herokuapp.com/images/api/levitation.png",
      _id: "60b545a812a35d412cf0fa48",
      name: "levitation",
    },
    {
      description: "Allows the user to strike things down using their mind.",
      img: "https://psychonauts-api.herokuapp.com/images/api/marksmanship.png",
      _id: "60b545a812a35d412cf0fa49",
      name: "marksmanship",
    },
    {
      description: "Allows the user to break objects using their mind.",
      img: "https://psychonauts-api.herokuapp.com/images/api/psi-punch.jpg",
      _id: "60b545a812a35d412cf0fa4a",
      name: "psi-punch",
    },
    {
      description: "Allows the user to set objects on fire using their mind.",
      img: "https://psychonauts-api.herokuapp.com/images/api/pyrokinesis.png",
      _id: "60b545a812a35d412cf0fa4b",
      name: "pyrokinesis",
    },
    {
      description: "Allows the user to create a psychic shield.",
      img: "https://psychonauts-api.herokuapp.com/images/api/shield.png",
      _id: "60b545a812a35d412cf0fa4c",
      name: "shield",
    },
    {
      description: "Allows the user to move objects with their mind.",
      img: "https://psychonauts-api.herokuapp.com/images/api/telekinesis.png",
      _id: "60b545a812a35d412cf0fa4d",
      name: "telekinesis",
    },
  ],
  __v: 0,
};

describe("render character page", () => {
    it("should render character name", () => {
        mockedAxios.get.mockResolvedValue({ data: [character] });
        mockedParams.name = "razputin"
        render(<Character />)
        const name = screen.getByText("Razputin Aquato");
        expect(name).toBeInTheDocument();

    })
})

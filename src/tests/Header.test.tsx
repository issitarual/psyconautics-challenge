import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("render header components", () => {
  it("should render logo image", () => {
    render(<Header setCharacter={() => alert("hey")} />);
    const image = screen.getByAltText("psychonauts");
    expect(image).toBeInTheDocument();
  });
  it("should render input", () => {
    render(<Header setCharacter={() => alert("hey")} />);
    const seachBar = screen.getByPlaceholderText("Procure por um personagem");
    expect(seachBar).toBeInTheDocument();
  }); 
});

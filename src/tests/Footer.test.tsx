import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("render footer links", () => {
  it("should render characters page link", () => {
    render(<Footer />);
    const linkElement = screen.getByText("Personagens");
    expect(linkElement).toBeInTheDocument();
  });
  it("should render favorities page link", () => {
    render(<Footer />);
    const linkElement = screen.getByText("Meus Favoritos");
    expect(linkElement).toBeInTheDocument();
  });
});

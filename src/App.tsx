import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./pages/characters";
import { useState } from "react";
import Character from "./pages/character";
import Favorities from "./pages/favorities";

function App() {
  const [searchCharacter, setSearchCharacter] = useState("");
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header setCharacter={setSearchCharacter} />
      <Switch>
        <Route
          path="/"
          exact
          component={() => Characters({ searchCharacter })}
        />
        <Route path="/character/:name" exact component={Character} />
        <Route path="/favorities" exact component={Favorities} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

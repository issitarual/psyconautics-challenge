import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Character from "./pages/Character";
import Favorities from "./pages/Favorities";
import Home from "./pages/Home";

function App() {
  const [searchCharacter, setSearchCharacter] = useState("");
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header setCharacter={setSearchCharacter} />
      <Switch>
        <Route path="/" exact component={() => Home({ searchCharacter })} />
        <Route path="/character/:name" exact component={Character} />
        <Route path="/favorities" exact component={Favorities} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

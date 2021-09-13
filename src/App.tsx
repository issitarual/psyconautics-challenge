import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./pages/characters";
import {useState} from "react";
import Character from "./pages/character";

function App(){
  const [searchCharacter, serSearchCharacter] = useState("");
  return (
    <BrowserRouter>
    <GlobalStyles />
     <Header setCharacter={serSearchCharacter} /> 
    <Switch>
       <Route path="/" exact component={() => Characters({searchCharacter})} />
       <Route path="/:name" exact component={Character} />  
    </Switch>
     <Footer /> 
  </BrowserRouter>
  );
}

export default App;

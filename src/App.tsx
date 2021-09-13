import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./pages/characters";
import {useState} from "react";

function App(){
  const [searchCharacter, serSearchCharacter] = useState("");
  return (
    <BrowserRouter>
    <GlobalStyles />
     <Header setCharacter={serSearchCharacter} /> 
    <Switch>
       <Route path="/" exact component={() => Characters({searchCharacter})} /> 
    </Switch>
     <Footer /> 
  </BrowserRouter>
  );
}

export default App;

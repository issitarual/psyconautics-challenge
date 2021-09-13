import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Character() {
    const { name }: {name: string} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios.get(`https://psychonauts-api.herokuapp.com/api/characters?name=${name}`)
        .then(({data}) => setCharacter(data))
        .catch((error) => console.log(error));
    }, []);
    console.log(character);
    return(
        <>
        allala
        </>
    )    
}
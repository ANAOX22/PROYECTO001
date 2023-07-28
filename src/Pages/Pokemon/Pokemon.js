import { useNavigate, useParams } from "react-router-dom";

import './Pokemon.css'
import { useFetch } from "./useFetch";
import { useContext } from "react";
import { AppContext } from "../../Contexts/ContextProvider";

const Pokemon = () => {
    const navigate = useNavigate()

    const { logado, setLogado } = useContext(AppContext)


    const { id } = useParams()
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const sair = () => {
        setLogado(false)
        navigate(`/`)
    }
    
    return (
        <div className="pokemon">
            <h1> Id de la URL: {id}</h1>
            <h2> Nome DO POKEMON QUE ESTA LA POKEAPI: {data.name}</h2>
            <h2> Id DO POKEMON QUE ESTA LA POKEAPI: {data.id}</h2>
            <button type="button" onClick={sair}>SALIR</button>
        </div>
    )
}
export default Pokemon
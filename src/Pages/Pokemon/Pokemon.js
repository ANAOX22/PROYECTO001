import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({})
    
    const { id } = useParams()



    useEffect(() => {
        const getPokemon = async () => {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const dados = await resposta.json()
            setPokemon(dados)
        }
        getPokemon()
    },[])
    
console.log(pokemon)
console.log(pokemon.game_indices)

    return (<>
        <h1> Id de la URL: {id}</h1>
        <h2> Nome DO POKEMON QUE ESTA LA POKEAPI:  {pokemon.name}</h2>
        <h2> Id DO POKEMON QUE ESTA LA POKEAPI:  {pokemon.id}</h2>
    </>
    )
}
export default Pokemon 
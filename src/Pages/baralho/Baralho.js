import { useContext } from 'react'
import { AppContext } from '../../Contexts/ContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from './useFetch'

import './Baralho.css'

const Baralho = () => {
    const { data, loading, error } = useFetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)


    const { logado, setLogado } = useContext(AppContext)
    console.log(logado)
    const { id } = useParams()
    const navigate = useNavigate()

    const sair = (event) => {
        event.preventDefault()
        setLogado(false)
    }

    const perfil = (event) => {
        event.preventDefault()//impide que recarge la pagina
        navigate(`/Perfil/${id}`);
    };

    return (
        <div >
            <h1 className='baralho'>BARALHO</h1>

                <div>
                    <button type="button" onClick={sair}>SALIR</button>
                    <button onClick={perfil} type="submit" className="btn btn-primary">PERFIL</button>
                </div>
                <p className='data'>{data.deck_id}</p>
            
        </div>
    )
}
export default Baralho
import { useContext } from 'react'
import { AppContext } from '../../Contexts/ContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../Pokemon/useFetch'
import './Baralho.css'



const Baralho = () => {
    const { logado, setLogado } = useContext(AppContext)
    //console.log('Logado',logado)
    const { data, loading, error } = useFetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    // console.log('Data', data)
    // console.log('Loading', loading)
    // console.log('Error', error)



    const { id } = useParams()
    // console.log('Id params()', id)

    const navigate = useNavigate()
    //console.log('Navigate', navigate)


    const sair = (event) => {
        setLogado(false)
    }
    const perfil = (event) => {
        event.preventDefault()//impide que recarge la pagina
        navigate(`/Perfil/${id}`);
    };
    return (
        <div className='baralho'>
            <h1 className='baralho'>BARALHO</h1>
            <div>
                <button type="button" onClick={sair}>SALIR</button>
                <button onClick={perfil} type="button" className="btn btn-primary">PERFIL</button>
            </div>
            {
                loading && <p>Cargando.....</p>
            }
            <p className='data'>{data.deck_id}</p>
        </div>
    )
}
export default Baralho
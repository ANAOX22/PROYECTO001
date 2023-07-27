import { useContext } from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { AppContext } from "../../Contexts/ContextProvider"


import './Perfil.css'

const Perfil = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { logado, setLogado } = useContext(AppContext)
    console.log('=>LOGADO', logado)

    const objetoDos = useSelector(state => state.cursos)
    console.log('=>PERFIL', objetoDos)

    const sair = () => {
        setLogado(false)
        navigate(`/`);

    }
    const contato = (event) => {
        event.preventDefault()//impide que recarge la pagina
        navigate(`/Contato/${id}`);
    };
    const baralho = (event) => {
        event.preventDefault()
        navigate(`/Baralho/${id}`);
    };

    return (

        <div className="perfil">
            <br />
            <h1>PERFIL</h1>
            <button type="button" onClick={sair}>SALIR</button>
            <button onClick={contato} type="submit" className="btn btn-primary">CONTATO</button>
            <button onClick={baralho} type="submit" className="btn btn-primary">BARALHO</button>

            <p>objeto pasado por useSelector</p>

            <br />

            <p>SELECIONANDO apenas un ESTADO </p>

            <br />
            <br />
            <p>{objetoDos}</p>
            <h1>PERF IL COM ID QUE VIENE DEL PARAMETRO DE LA URL COM useParams : {id}</h1>
        </div>

    )
}
export default Perfil;
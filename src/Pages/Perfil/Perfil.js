import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Perfil = () => {
    const objetoDos = useSelector(state => state.cursos)
    //console.log(objetoDos)

    const { id } = useParams()
    console.log(id)
    return (
        <>
            <div className="p-3 mb-2 bg-dark text-white">
                objeto pasado por useSelector <br />
                SELECIONANDO apenas un ESTADO <br />
                <br />
                <p>{objetoDos}</p>
                <h1>PERF IL COM ID QUE VIENE DEL PARAMETRO DE LA URL COM useParams : {id}</h1>
                <button type="button" className="btn btn-dark">Light</button>
                <button type="button" className="btn btn-danger">Light</button>
                <button type="button" className="btn btn-dark">Light</button>
            </div>
        </>
    )
}
export default Perfil;
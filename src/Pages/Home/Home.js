import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import actionProd from '../../Components/estado/acciones/produtos'
import Card1 from '../../Components/Card/Card1'
import './Home.css'
const Home = () => {


    const [prod, setProd] = useState('')
    const objeto = useSelector(state => state)
    //====================================================================
    const objetoCuatro = useSelector(state => state.produtos)
    //console.log('selector', objetoCuatro)
    //===================================================================
    const dispath = useDispatch()

    //====================================================================
    const addProdutos = () => {
        //console.log('chamada prod', prod)
        dispath(actionProd.addi(prod))
        console.log('chamada adiciona-HOME-objeto4', objetoCuatro)
    }

    //============================================================
    const removeProdutos = () => {
        dispath(actionProd.apaga())
        console.log('chamada remove-HOME-objeto4', objetoCuatro)
    }

    //========================================================= 

    //console.log('HOME', objeto)
    return (
        <div className="home">
            <h1>HOME</h1>
            <p>colocada na ruta "/HOME"</p>
            <p>input y botones com abstraccion</p>

            <p> <input value={prod}
                onChange={(event) => setProd(event.target.value)} /></p>

            <button type="button" onClick={addProdutos}>ADD PRODUTOS</button>

            <button type="button" onClick={removeProdutos}>DELETE PRODUTOS</button>

            <p>objetos pasados TODOS LOS ESTADOS
                por react redux a travez del multiple estado
                sin seleccionar</p>
            <p>{objeto.cursos}</p>



            <p>objeto pasado por useSelector seleccionado 
                y modificado con abstraccion de funcion</p>
            <p>{objetoCuatro}</p>

            <Card1 conteudo={objeto.cursos} />

        </div>
    )
}
export default Home;
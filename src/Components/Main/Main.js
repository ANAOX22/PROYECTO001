import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import actionProd from '../estado/acciones/produtos'
import './Main.css'
import Card from "../Card/Card"

const Main = () => {

    const [prod, setProd] = useState('')
    //====================================================================
    const objetoDos = useSelector(state => state.cursos)
    //====================================================================
    const objetoCuatro = useSelector(state => state.produtos)
    //console.log('selector', objetoCuatro)
    //===================================================================
    const dispath = useDispatch()

    //====================================================================
    const addProdutos = () => {
        dispath(actionProd.addi(prod))
        console.log('chamada adiciona-HOME-objeto4', objetoCuatro)
    }

    //============================================================
    const removeProdutos = () => {
        dispath(actionProd.apaga())
        console.log('chamada remove-HOME-objeto4', objetoCuatro)
    }

    //========================================================= 

    //console.log('HOME-objeto', objeto)


    return (
        <div className="main">
            <h1>MAIN</h1>         
            <p>input y botones com abstraccion</p>

            <p> <input value={prod}
                onChange={(event) => setProd(event.target.value)} />
                <button type="button" onClick={addProdutos}>ADD PRODUTOS</button>
                <button type="button" onClick={removeProdutos}>DELETE PRODUTOS</button></p>
            <Card conteudo={objetoCuatro} />
            <Card conteudo={objetoDos} />

        </div>
    )
}
export default Main;
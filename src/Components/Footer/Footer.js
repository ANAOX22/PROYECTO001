import { useContext } from "react"
import { AppContext } from "../../Contexts/ContextProvider"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import './Footer.css'
import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()

    const [idPut, setIdPut] = useState('')

    const [prod, setProd] = useState('')

    const objetoTres = useSelector(state => state.produtos)
    //console.log('objeto3',objetoTres)
    //===================================================================
    const dispath = useDispatch()
    //====================================================================
    const addProdutos = () => {

        dispath({ type: 'ADD_PRODUTOS', produtos: prod })
        console.log('chamada-add-FOOTER-objeto3', objetoTres)
    }
    //============================================================
    const removeProdutos = () => {
        dispath({ type: 'REMOVE_PRODUTOS' })
        console.log('chamada-remove-FOOTER-objeto3', objetoTres)
    }
    //========================================================= 



    //==================================================================

    const { logado, setLogado } = useContext(AppContext)
    //==================================================================

    const logar = () => {
        setLogado(true)
        navigate(`Perfil/${idPut}`)
    }
    const sair = () => {
        setLogado(false)

    }
    //console.log( logado, 'Estado Footer')

    return (
        <div className="footer">

            <h1>FOOTER</h1>

            <p>objeto pasado por useSelector seleccionando e compartiendo</p>

            <p>desde el index de la pasta ESTADOS</p>

            <p>{objetoTres}</p>
            <p>{prod}</p>

            <p> <input value={prod}
                onChange={(event) => setProd(event.target.value)} /></p>

            <button type="button" onClick={addProdutos}>ADD PRODUTOS</button>
            <button type="button" onClick={removeProdutos}>DELETE PRODUTOS</button>

            <h2>botao de login con context API</h2>
            <h3>renderizado condicional ternario</h3>

            <form>
                <input value={idPut}
                    onChange={event => setIdPut(event.target.value)} />
                {
                    logado === false ?
                        (
                            <button type="button" onClick={logar}>ENTRAR</button>
                        ) : (
                            <button type="button" onClick={sair}>SALIR</button>
                        )
                }
            </form>
        </div>
    )
}
export default Footer; 
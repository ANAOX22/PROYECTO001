import { useState } from "react"
import './Header.css'
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const [idPut, setIdPut] = useState('')

    //useState expplicado
    const [logado, setLogado] = useState(false)

    const logar = () => {
        setLogado(true)
        navigate(`Pokemon/${idPut}`)
    }

    const sair = () => {
        setLogado(false)

    }

    //console.log(logado,' Estado Header')

    return (
        <div className='header'>
            <h1>HEADER</h1>
            <h2>botao de login con useState no componente</h2>
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
                } </form>

        </div>
    )
}
export default Header;   
import { useState } from "react"
import './Header.css'

const Header = () => {

    const [logado, setLogado] = useState(false)

    const logar = () => {
        setLogado(true)
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
            {
                logado === false ?
                    (
                        <button type="button" className='btn1' onClick={logar}>logar</button>
                    ) : (
                        <button type="button" className='btn2' onClick={sair}>sair</button>
                    )
            }
        </div>
    )
}
export default Header;   
import { useForm } from 'react-hook-form'

import { useParams } from "react-router-dom";
import './Contato.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../../Contexts/ContextProvider';

const Contato = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const {  setLogado } = useContext(AppContext)

    const { register, handleSubmit } = useForm()


    const enviarDados = (dados, event) => {
        event.preventDefault()
        console.log(dados)
    }

    const perfil = (event) => {
        event.preventDefault()//impide que recarge la pagina
        navigate(`/Perfil/${id}`);
    }
    const sair = (event) => {
        event.preventDefault()
        setLogado(false)
        navigate(`/`);

    }

    return (
        <div className='contato'>
            <h1>CONTATO</h1>
            <p>
                <button type="button" onClick={sair}>SALIR</button>
                <button onClick={perfil} type="submit" className="btn btn-primary">PERFIL</button>                <br />
            </p>
            <p>colocado na ruta "/Contato"</p>
            <br />
            <form>
                <fieldset>LOGIN<br />
                    <input type="email"
                        placeholder="email"
                        {...register('email')}
                    >
                    </input>

                    <br />

                    <input type="password"
                        placeholder="password"
                        {...register('password')}
                    >
                    </input>

                    <br />

                    <input type="name"
                        placeholder="nome"
                        {...register('name')}
                    >
                    </input>

                    <br />

                    <input type="number"
                        placeholder="idade"
                        {...register('number')}
                    >
                    </input>

                    <br />

                    <button type="submit" onClick={handleSubmit(enviarDados)}>BOTON</button>
                </fieldset>

            </form>
        </div>
    )
}
export default Contato;
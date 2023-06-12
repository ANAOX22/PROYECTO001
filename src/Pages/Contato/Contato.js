import { useForm } from 'react-hook-form'


const Contato = () => {
    const {register, handleSubmit}= useForm()

    const enviarDados = (dados) => {
        console.log(dados) 
    }

    return (
        <>
            <div>
                <h1>CONTATO</h1>
                <p>colocado na ruta "/Contato"</p>
                <a href='./Home'>HOME</a><br />
                <a href='./Perfil'>PERFIL</a>
                <br />
                <form>
                    <fieldset>LOGIN<br/>
                        <input type="email" 
                            placeholder="email" 
                            {...register ('email') }
                            >
                        </input>
                        
                        <br />

                        <input type="password"
                            placeholder="password"
                            {...register ('password')}
                            >
                        </input>

                        <br/>

                        <input type="name"
                            placeholder="nome"
                            {...register ('name')}
                            >
                        </input>
                        
                        <br/>
                        
                        <input type="number"
                            placeholder="idade"
                            {...register ('number')}
                            >
                        </input>

                        <br/>
                        
                        <button type="submit" onClick={handleSubmit(enviarDados)}>BOTON</button>
                    </fieldset>

                </form>
            </div>
        </>
    )
}
export default Contato;
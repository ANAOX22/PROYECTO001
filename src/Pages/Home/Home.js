import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Aside from '../../Components/Aside/Aside'
import Main from "../../Components/Main/Main"

import './Home.css'


const Home = () => {


    // const [prod, setProd] = useState('')
    // const objeto = useSelector(state => state)
    // //====================================================================
    // const objetoCuatro = useSelector(state => state.produtos)
    // //console.log('selector', objetoCuatro)
    // //===================================================================
    // const dispath = useDispatch()

    // //====================================================================
    // const addProdutos = () => {
    //     dispath(actionProd.addi(prod))
    //     console.log('chamada adiciona-HOME-objeto4', objetoCuatro)
    // }

    // //============================================================
    // const removeProdutos = () => {
    //     dispath(actionProd.apaga())
    //     console.log('chamada remove-HOME-objeto4', objetoCuatro)
    // }

    // //========================================================= 

    // //console.log('HOME-objeto', objeto)
    return (
        <div className='home'>

            <Header />
            <Main/>
            
            <Aside />
            {/* <div className="home">
                <h1>HOME</h1>
                <p>colocada na ruta "/HOME"</p>
                <p>input y botones com abstraccion</p>

                <p> <input value={prod}
                    onChange={(event) => setProd(event.target.value)} />
                    <button type="button" onClick={addProdutos}>ADD PRODUTOS</button>
                    <button type="button" onClick={removeProdutos}>DELETE PRODUTOS</button></p>

                <p>objetos pasados TODOS LOS ESTADOS
                    por react redux a travez del multiple estado
                    sin seleccionar</p>
                <p>{objeto.cursos}</p>

                <p>objeto pasado por useSelector seleccionado
                    y modificado con abstraccion de funcion</p>
                <p>{objetoCuatro}</p>

                <Card conteudo={objeto.cursos} />
                <p>objeto modificado y renderixado en el card</p>
                <Card conteudo={objetoCuatro} />

            </div> */}

            <Footer />
        </div>
    )
}
export default Home;
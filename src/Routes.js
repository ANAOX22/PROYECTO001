import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Contato from './Pages/Contato/Contato'
import Perfil from './Pages/Perfil/Perfil'
import Pokemon from './Pages/Pokemon/Pokemon'
import Home from './Pages/Home/Home'
import Baralho from './Pages/baralho/Baralho'
import { AppContext } from './Contexts/ContextProvider';


const MainRoutes = () => {



    const { logado } = useContext(AppContext)
    // console.log('ROTAS COM CONTEXTO', { logado })

    return (
        <Routes>
            
            <Route path='/' exact='{true}' element={<Home />} />

            <Route path='/Contato/:id' exact='{true}' element={
                logado ? <Contato /> : <Home />} />

            <Route path='/Perfil/:id' exact='{true}' element={
                logado ? <Perfil /> : <Home />} />

            <Route path='/Baralho/:id' exact='{true}' element={
                logado ? <Baralho /> : <Home />} />

            <Route path='/Pokemon/:id' exact='{true}' element={<Pokemon />} />
        </Routes>
    )
}
export default MainRoutes;
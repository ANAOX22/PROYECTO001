import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Contato from './Pages/Contato/Contato'
import Perfil from './Pages/Perfil/Perfil'
import Pokemon from './Pages/Pokemon/Pokemon'
import Home from './Pages/Home/Home'
import { AppContext } from './Contexts/ContextProvider';

const MainRoutes = () => {

    const {logado} = useContext(AppContext)


    return (
        <Routes>
            <Route path='/' exact='{true}' element={<Home />} />
            <Route path='/Contato' exact='{true}' element={<Contato />} />
            <Route path='/Perfil/:id' exact='{true}' element={
            logado ? <Perfil />: <Home />} />
            <Route path='/Pokemon/:id' exact='{true}' element={<Pokemon />} />
        </Routes> 
    )
}
export default MainRoutes;
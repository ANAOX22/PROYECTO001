import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aside from "./Components/Aside/Aside";
import { ContextProvider } from "./Contexts/ContextProvider";
import { Provider } from 'react-redux';
import { estado } from './Components/estado';
import MainRoutes from "./Routes";
import './App.css';
function App() {

//console.log('APP.JS', estado)


  return (
    <Provider store = {estado}>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <MainRoutes>
            <Aside />
          </MainRoutes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>

    </Provider>
  )
}
export default App;   
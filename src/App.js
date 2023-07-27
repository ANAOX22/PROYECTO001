import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Contexts/ContextProvider";
import { Provider } from 'react-redux';
import { estado } from './Components/estado';
import MainRoutes from "./Routes";

function App() {

  //console.log('=>APP.JS', estado)


  return (
    <Provider store={estado}>

      <ContextProvider>

        <BrowserRouter>

          <MainRoutes />

        </BrowserRouter>
      </ContextProvider>
    </Provider>
  )
}
export default App;   
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Aside from '../../Components/Aside/Aside'
import Main from "../../Components/Main/Main"

import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Main />
            <Aside />
            <Footer />
        </div>
    )
}
export default Home;
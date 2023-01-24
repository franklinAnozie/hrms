import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <p>Welcome Message</p>
            <p>Registration and Login Forms</p>
            <p>
                <Outlet />
            </p>
            <Footer />
        </>
    )
}

export default Home;
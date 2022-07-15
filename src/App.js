import { Routes, Route } from 'react-router-dom';
import Home from './features/pages/Home';
import Buy from './features/pages/Buy';
import Sell from './features/pages/Sell';
import Trade from './features/pages/Trade';
import Contact from './features/pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from "./components/ImageSlider"


const App =() => {
    const slides = [
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},
        {url:"", title: ""},

    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <div>
            <h1>Hello monsterlessons</h1>
                <div style={containerStyles}>
                    <ImageSLider slides={slides}/>
                </div>
        </div>
    );
};

function App() {
   

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='about' element={<Home />} />
                <Route path='' element={<Buy />} />
                <Route path='/' element={<Sell />} />
                <Route path='/' element={<Trade />} />
                <Route path='/' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

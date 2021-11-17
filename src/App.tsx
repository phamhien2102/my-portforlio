import React, {useState} from 'react';
import Topbars from "./components/topbars/Topbars";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return <div className="app">
        <Topbars menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            {/*<Portfolio/>*/}
            {/*<Works/>*/}
            {/*<Testimonials/>*/}
            {/*<Contact/>*/}
        </div>
    </div>;
}

export default App;

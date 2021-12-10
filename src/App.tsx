import React from 'react';
import './app.scss'
// import TimeLine from './TimeLine'
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact-1/Contact";
import Nav from "./components/nav/Nav";
import About from "./components/about/About"
import Timeline from "./components/timeline";

function App() {
    const location = useLocation();

    React.useEffect(() => {
        console.log('Location changed', location);
    }, [location]);

    return (
            <div className="app">
                <Nav/>
                <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/timeline" element={<Timeline/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                </div>
            </div>
    )

}

export default App;

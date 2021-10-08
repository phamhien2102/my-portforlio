import React, {useEffect, useRef} from 'react';
import "./intro.scss"
import { init } from 'ityped'

function Intro() {
    const textRef = useRef<any>()
    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 500,
            backSpeed: 80,
            strings: ["Developer", 'Designer', "Content Creator"]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={"assets/man.png"} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Hien Pham</h1>
                    <h3>Mobile <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src={"assets/down.png"}  alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;

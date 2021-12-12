import React, {useEffect, useRef} from 'react';
import "./home.scss"
import {ReactComponent as BackgroundIc} from '../../assets/ic_background.svg'
import {init} from "ityped";

interface Props {}

function Home(props: Props) {
    const textRef = useRef<any>()
    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 500,
            backSpeed: 80,
            strings: ["Mobile Application Developer", "Web Developer"]
        })
    }, [])

    return (
        <div className="home">
            <BackgroundIc/>
            <div>
                <h2>Hi, Guy</h2>
                <h2>I'm Hien Pham</h2>
                <h3>I'm a <span ref={textRef} className="highlight"/></h3>
            </div>
        </div>
    );
}

export default Home;

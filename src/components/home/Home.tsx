import React from 'react';
import "./home.scss"
import {ReactComponent as BackgroundIc} from '../../assets/ic_background.svg'

interface Props {}

function Home(props: Props) {

    return (
        <div className="home">
            <BackgroundIc/>
            <div>
                <div>Hi, Guy</div>
                <div>I'm Hien Pham</div>
            </div>
        </div>
    );
}

export default Home;

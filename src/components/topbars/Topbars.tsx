import React from 'react';
import "./topbars.scss"
import { Person, Mail } from "@material-ui/icons"

interface TopbarProps {
    menuOpen: boolean;
    setMenuOpen(isOpen: boolean): void
}

function Topbars(props: TopbarProps) {
    return (
        <div className={"topbars " + (props.menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#portfolio" className="logo">Hien Pham</a>
                    <div className="itemContainer" >
                        <Person className="icon"/>
                        <span>+1221121212</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>+1221121212</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=> props.setMenuOpen(!props.menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbars;

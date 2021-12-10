import React from 'react';
import "./menu.scss"

interface MenuProps {

}
function Menu(props: MenuProps) {
    return (
        <div className="menu">
            <div className="item">
                <ul>
                    <li onClick={()=> {}}>
                        <a href="#intro">Home</a>
                    </li>
                </ul>
            </div>
            <div className="item">
                <ul>
                    <li onClick={()=> {}}>
                        <a href="#intro">About Me</a>
                    </li>
                </ul>
            </div>
            <div className="item">
                <ul>
                    <li onClick={()=> {}}>
                        <a href="#intro">Time Line</a>
                    </li>
                </ul>
            </div>
            <div className="item">
                <ul>
                    <li onClick={()=> {}}>
                        <a href="#intro">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Menu;

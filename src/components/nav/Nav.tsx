import React from 'react';
import "./Nav.scss"
import { Link } from 'react-router-dom'
import Space from "../space";
import {ReactComponent as HomeIc} from '../../assets/home.svg'
import {ReactComponent as AboutMeIc} from '../../assets/about_me.svg'
import {ReactComponent as TimelineIc} from '../../assets/time_line.svg'
import {ReactComponent as MailIc} from '../../assets/mail_bulk.svg'
import {FaRocket} from "react-icons/all";
// import Social from "../social/Social";

interface NavProps {}
const ICON_SIZE = 64
const SPACE_COLOR = 'white'
function Nav(props: NavProps) {
    return (
        <nav className="nav">
            {/*<Space height={16} />*/}
            {/*<div className="avatar"/>*/}
            {/*<Space height={16}/>*/}
            {/*<div>Hien Pham</div>*/}
            {/*<Space height={8}/>*/}
            {/*<Space color={SPACE_COLOR}/>*/}
            <Link className="item" to="/">
                <HomeIc height={ICON_SIZE} width={ICON_SIZE}  className="logoxx"/>
                <Space height={8}/>
                <li>Home</li>
            </Link>
            <Space color={SPACE_COLOR}/>
            <Link className="item" to="/about">
                <AboutMeIc height={ICON_SIZE} width={ICON_SIZE}/>
                <Space height={16}/>
                <li>About Me</li>
            </Link>
            <Space color={SPACE_COLOR}/>
            <Link className="item" to="/my-resume">
                <TimelineIc height={ICON_SIZE} width={ICON_SIZE}/>
                <Space height={16}/>
                <li>My Resume</li>
            </Link>
            <Space color={SPACE_COLOR}/>
            <Link className="item" to="/contact">
                <FaRocket size={ICON_SIZE}/>
                <Space height={16}/>
                <li>Portfolio</li>
            </Link>
            <Space color={SPACE_COLOR}/>
            <Link className="item" to="/contact">
                <MailIc height={ICON_SIZE} width={ICON_SIZE}/>
                <Space height={16}/>
                <li>Contact</li>
            </Link>
            <Space color={SPACE_COLOR}/>
            {/*<div className="socials">*/}
            {/*    <Social/>*/}
            {/*</div>*/}

        </nav>
    );
}

export default Nav;

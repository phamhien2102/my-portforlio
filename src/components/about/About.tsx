import React from 'react';
import "./about.scss"
import {BiTimer, FaBug, FaCode, FaRegArrowAltCircleRight, FaRegCalendarAlt, FiSettings} from "react-icons/all";
import {Link} from "react-router-dom";

enum IconName {
    FaCode= 'FaCode',
    FiSettings = 'FiSettings',
    FaRegCalendarAlt = 'FaRegCalendarAlt',
    FaBug = 'FaBug'
}
const ListSkill = [
    {
        title: 'Development',
        desc: 'I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.',
        iconName: IconName.FaCode
    },
    {
        title: 'Solution Architecture',
        desc: 'I am experienced in thinking, designing and implementing large scale web and mobile applications.',
        iconName: IconName.FiSettings
    },
    {
        title: 'Problem Solver',
        desc: 'There is always a solution to all the problems, and I make sure to find the most appropriate solutions.',
        iconName: IconName.FaBug
    },
    {
        title: 'Task Management',
        desc: 'Some people know how to manage project, some don\'t and projects become just hopeless. I am part of the good ones.',
        iconName: IconName.FaRegCalendarAlt
    }
]
function About() {
    const Skill = (props: {title: string; desc: string; iconName: string}) => {
        return <div className="skill">
            <Icon name={props.iconName}/>
            <div className="title">{props.title}</div>
            <div className="desc">{props.desc}</div>
        </div>
    }

    const Icon = (props: {name: string})=> {
        switch (props.name){
            case IconName.FaCode:
                return <FaCode size={24} className="iconWrapper" color={"white"} />
            case IconName.FiSettings:
                return <FiSettings size={24} className="iconWrapper" color={"white"} />
            case IconName.FaBug:
                return <FaBug size={24} className="iconWrapper" color={"white"} />
            case IconName.FaRegCalendarAlt:
                return <FaRegCalendarAlt size={24} className="iconWrapper" color={"white"} />
            default:
                return null
        }
    }
    return (
        <div className="about">
            <div className="headerTitle">About me</div>
            <div className="introWrapper">
                <div className="intro">
                    <div>Hello, I'm Hiền Phạm!</div>
                    <div>I have been programming for over 15 years including 8 years of professional expertise, I specialise in architecting and building complex javascript web and mobile applications. I enjoy functional programming and technologies like React and Redux. I have strong skills and interest in UI/UX and drive my decisions to provide the best for final user</div>
                </div>
                <div className="image">Image</div>
            </div>
            <div className="description">
                {ListSkill.map(skill =>
                    <Skill title={skill.title} desc={skill.desc} iconName={skill.iconName}/>
               )}
            </div>
            <div className="bottom" onClick={()=> {}}>
                {_renderContinueBtn()}
            </div>
        </div>
    );

    function _renderContinueBtn() {
        return (
            <Link className="button" to={"/my-resume"}>
                <FaRegArrowAltCircleRight color={'white'}/>
                <div className="buttonLabel">
                    Continue to my resume
                </div>
            </Link>
        )
    }
}

export default About;

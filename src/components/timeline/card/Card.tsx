import React from 'react';
import "./card.scss"
// import Space from "../../space";
import {  FaGraduationCap } from "react-icons/fa";
import {  BiBuildingHouse } from "react-icons/bi";
import {  DiGitBranch } from "react-icons/di";
import {TimeLineModel} from "../../../models/TimeLineModel";
import {Project} from "../../../models/Project";
interface Props {
    data: TimeLineModel
}


const IconSelector = ({iconName = '' }): React.ReactElement | null => {
    switch (iconName){
        case 'BiBuildingHouse':
            return <BiBuildingHouse color={'white'} size={24}/>
        case 'FaGraduationCap':
            return <FaGraduationCap color={'white'} size={24}/>
        case 'DiGitBranch':
            return <DiGitBranch color={'white'} size={24}/>
        default:
            return null

    }
}

function Card(props: Props) {
    const cardData = props.data;
    const ProjectHeader = (props: { fromDate: string; toDate: string; title: string}) => (
        <div className="projectHeader">
            <div className="dot"/>
            <div className="line"/>
            {props.fromDate && <span className="fromDate">{props.fromDate}</span>}
            {props.toDate && <span className="toDate">{props.toDate}</span>}
            <div className="title">{props.title}</div>
        </div>
    )

    const ProjectDetails = (props: {projects: Project[]}) => {
        return <div className="projectDetail">
            {props.projects.map(p => <div className="contentWrapper">
                <div className="basic">
                    <ProjectHeader title={p.title} fromDate={p.fromDate} toDate={p.toDate}/>
                    {p.descriptions.map((i => <div className="descriptions">{i}</div>))}
                </div>
                <div className="tagsWrapper">
                    {p.skills.map(skill => <span className="tag">{skill}</span>)}
                </div>
            </div>)}
        </div>
    }

    const CategoryHeader = (props: {iconName: string; categoryName: string}) => (
        <div className="categoryHeader">
            <div className="circle">{<IconSelector iconName={props.iconName}/>}</div>
            <div className="smallLine"></div>
            <div className="title">{props.categoryName}</div>
        </div>
    )

    const CompanyHeader = (props: { fromDate: string; toDate: string; title: string}) => (
        <div className="companyHeader">
            <div className="dot"/>
            <div className="line"/>
            {props.fromDate && <span className="fromDate">{props.fromDate}</span>}
            {props.toDate &&  <span className="toDate">{props.toDate}</span>}
            <div className="title">{props.title}</div>
        </div>
    )

    return (
        <div className="card" id="card">
                <CategoryHeader iconName={cardData.iconName} categoryName={cardData.categoryName} />
                <div className="categoryDetails">
                    {cardData.details.map((item =>
                            <div className="company">
                                <div className="contents">
                                    <CompanyHeader fromDate={item.fromDate} toDate={item.toDate} title={item.title}/>
                                    <ProjectDetails projects={item.projects}/>
                                </div>
                            </div>
                    ))}
                </div>
        </div>
    );
}


export default Card;

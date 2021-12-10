import React from 'react';
import "./card.scss"
import {LifeEvent} from "../../../models/LifeEvent";
// import Space from "../../space";
import {  FaGraduationCap } from "react-icons/fa";
import {  BiBuildingHouse } from "react-icons/bi";
interface Props {
    data: LifeEvent
}


const IconSelector = ({iconName = '' }): React.ReactElement | null => {
    switch (iconName){
        case 'BiBuildingHouse':
            return <BiBuildingHouse color={'white'} size={24}/>
        case 'FaGraduationCap':
            return <FaGraduationCap color={'white'} size={24}/>
        default:
            return null

    }
}

function Card(props: Props) {
    const cardData = props.data;

    return (
        <div className="card" id="card">
                <div className="header">
                    <div className="circle">{<IconSelector iconName={cardData.iconName}/>}</div>
                    <div className="smallLine"></div>
                    {/*<span className="fromDate">{cardData.fromDate}</span>*/}
                    {/*<span className="toDate">{cardData.toDate}</span>*/}
                    <div className="title">{cardData.title}</div>
                </div>
                <div className="articlesWrapper">
                    {cardData.articles.map((item =>
                            <div className="articleItem">
                                <div className="contentsWrapper">
                                    <div className="articleHeader">
                                        <div className="dot"/>
                                        <div className="articleLine"/>
                                        <span className="fromDate">{item.fromDate}</span>
                                        <span className="toDate">{item.toDate}</span>
                                        <div className="articleTitle">{item.title}</div>
                                    </div>
                                    <div className="worksWrapper">
                                        {item.works.map(work => <div>{work}</div>)}
                                    </div>
                                </div>
                                <div className="tagsWrapper">
                                    {item.skills.map(skill => <span className="tag">{skill}</span>)}
                                </div>
                            </div>
                    ))}
                </div>
        </div>
    );
}

// function Card1(props: Props) {
//
//     return (
//         <div className="card" id="card">
//             <div className="center">
//                 <div className="titleWrapper">
//                     <span className="fromDate">{props.fromDate}</span>
//                     <span className="toDate">{props.fromDate}</span>
//                     <div className="title">{props.title}</div>
//                 </div>
//
//                 <div className="works">
//                     {props.works.map((item => <div className="descriptionText">{item}</div>))}
//                 </div>
//             </div>
//             <div className="right">
//                 {props.skills.map((item) => <span className="tags">
//                     {item}
//                 </span>)}
//             </div>
//         </div>
//     );
// }


export default Card;

import React from 'react';
import "./timeline.scss"
import Card from "./card/Card";
import {TimeLineResponse} from "../../data/TimeLineRes";
import {FaRegArrowAltCircleRight} from "react-icons/all";
import {Link} from "react-router-dom";

function Timeline() {


    return (
        <div className="timeline">
            <h1 className="label">
                My resume
            </h1>
            <div className="resume">
                <div className="verticalTimeline"/>
                <div className="resumeContent">
                    {TimeLineResponse.map((item) => <Card data={item} />)}
                </div>
            </div>
            <div className="bottom" onClick={()=> {}}>
                {_renderContinueBtn()}
            </div>
        </div>
    );

    function _renderContinueBtn() {
        return (
            <Link className="portfolioButton" to={"/about"}>
                <FaRegArrowAltCircleRight color={'white'}/>
                <div className="portfolioLabel">
                    Continue to my portfolio
                </div>
            </Link>
        )
    }
}

export default Timeline;

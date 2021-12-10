import React from 'react';
import "./timeline.scss"
import Card from "./card/Card";
import {TimeLineRes} from "../../data/TimeLineRes";

function Timeline() {


    return (
        <div className="timeline">
            <h1 className="label">
                Timeline
            </h1>
            <div className="resume">
                <div className="verticalTimeline"/>
                {TimeLineRes.map(item => <Card data={item} />)}
            </div>

        </div>
    );
}

export default Timeline;

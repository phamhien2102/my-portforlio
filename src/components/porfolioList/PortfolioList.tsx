import React from 'react';
import "./PortfolioList.scss"
interface PortfolioListProps {
    id: string
    title: string
    active: boolean
    setSelected(id: string): void
}
function PortfolioList(props: PortfolioListProps) {

    return (
        <div className={"portfolioList " + (props.active && "active")} onClick={()=> props.setSelected(props.id)}>
            {props.title}
        </div>
    );
}

export default PortfolioList;

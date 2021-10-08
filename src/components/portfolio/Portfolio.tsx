import React, {useEffect, useState} from 'react';
import "./portfolio.scss";
import PortfolioList from "../porfolioList/PortfolioList";
import {
    contentPortfolio,
    designPortfolio,
    featuredPortfolio,
    mobilePortfolio,
    webPortfolio
} from "../../data/featuredData";
interface PortfolioItemProps {
    id: number,
    title: string,
    img: string
}
function Portfolio() {
    const list = [
        {id: 'featured', title: "Featured"},
        {id: 'web', title: "Web App"},
        {id: 'mobile', title: "Mobile"},
        {id: 'design', title: "Designing"},
        {id: 'content', title: "Content"},

    ]
    const [selected, setSelected] = useState<string>(list[0].id);
    const [data, setData] = useState<PortfolioItemProps[]>([])

    useEffect(()=> {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;

        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => <PortfolioList title={item.title} active={selected === item.id} id={item.id} setSelected={setSelected}/>)}
            </ul>
            <div className="container">
                {data.map(item => (
                    <div className="item">
                        <img src={item.img} alt=""/>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

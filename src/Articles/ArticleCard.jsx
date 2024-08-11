import React from 'react';
import './Articles.css'

const ArticleCard = (props) => 
{
    return <div className="articleCard">
    <img src={props.image} alt = "book cover" />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <h3>{props.name}</h3>
    </div>
};

export default ArticleCard;

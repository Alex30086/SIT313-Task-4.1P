import React from 'react';
import './Tutorial.css'

const TutorialCard = (props) => 
{
    return <div className="tutorialCard">
    <img src={props.image} alt = "tutorial" />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <h3>{props.name}</h3>
    </div>
};

export default TutorialCard;

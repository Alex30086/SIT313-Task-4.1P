import React from 'react';
import TutorialCard from './TutorialCard';
import TutorialList from './TutorialList';
import './Tutorial.css'

function TutorialComponemt(Tutorial, i){
    return<TutorialCard
    image = {Tutorial.image}
    title = {Tutorial.title}
    description = {Tutorial.description}
    name = {Tutorial.name}
/>
}

const Tutorial = () =>
{   
    
    return <div className="Tutorial-cards">
        <h1 className="Tutorial-title">Featured Tutorials</h1>
        <div className="Tutorial-row">
            {TutorialList.map(TutorialComponemt)}
        </div>
        <button className="Tutorial-button">see all tutorials</button>

    </div>
}

export default Tutorial;

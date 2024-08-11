import React from 'react';
import ArticleCard from './ArticleCard';
import ArticleList from './ArticleList';
import './Articles.css'

function ArticleComponemt(Article, i){
    return<ArticleCard
    image = {Article.image}
    title = {Article.title}
    description = {Article.description}
    name = {Article.name}
/>
}

const Articles = () =>
{   
    
    return <div className="Article-cards">
        <h1 className="Article-title">Featured Articles</h1>
        <div className="Article-row">
            {ArticleList.map(ArticleComponemt)}
        </div>
        <button className="Article-button">see all articles</button>

    </div>
}

export default Articles;

import React from 'react';

import ArticlePreview from './ArticlePreview';

const ArticleList = props => {    
    if(typeof(props.articles) === 'undefined' || props.articles === null) {
        return (
            <div className="article-preview">Loading...</div>
        );
    } else if (props.articles.length === 0) {
        return (
            <div className="article-preview">
                No articles are here... yet.
            </div>
        );
    }

    return (
        <div>
            {
                props.articles.map(article => {
                    return (
                        <ArticlePreview article={article} key={article.slug}/>
                    );
                })
            }
        </div>
    );
}

export default ArticleList;
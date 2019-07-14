import React from 'react';

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
                        <h2>{article.title}</h2>
                    );
                })
            }
        </div>
    );
}

export default ArticleList;
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

function ArticleList() {
    console.log("render ArticleList")
    const articles = useSelector((state) => state.article.articleList);
    const inProgress = useSelector((state) => state.article.inProgress);

    if (!articles) {
        return (
            inProgress && <h1 role="alert">Article is loading</h1>
        );
    }

    if (articles.length === 0) {
        return <div className="article-preview">No articles are here... yet.</div>;
    }

    return (
        <>
            {articles.map((article) => (
                <div key={article.id}>
                    <p>ID: {article.id}</p>
                </div>
            ))}
        </>
    );
}

export default memo(ArticleList);

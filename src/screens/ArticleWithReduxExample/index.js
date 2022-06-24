import React, {
    useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../../components/Nav';

import {
    getArticleList,
    articlePageUnloaded
} from '../../reducers/article';

import ArticleList from './ArticleList';
import Counter from './Counter';

function ArticleWithReduxExample() {
    console.log("render ArticleWithReduxExample")
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchArticles = dispatch(getArticleList());
        return () => {
            fetchArticles.abort();
            dispatch(articlePageUnloaded());
        };
    }, [dispatch]);

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    ArticleWithReduxExample:
                </div>
            </div>
            <div>
                <ArticleList />
                <Counter />
            </div>
        </React.Fragment>
    );
}

export default ArticleWithReduxExample;
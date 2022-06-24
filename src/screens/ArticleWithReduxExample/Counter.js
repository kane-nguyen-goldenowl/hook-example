import React, { memo } from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    incremented,
    decremented
} from '../../reducers/article';

function Counter() {
    console.log("render Counter")
    const value = useSelector((state) => state.article.value);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        console.log("handleIncrease")
        dispatch(incremented())
    }
    const handleDecrease = () => {
        console.log("handleDecrease")
        dispatch(decremented())
    }

    return (
        <>
            <p>Counter: {value}</p>
            <button onClick={handleIncrease}>Inc</button>
            <button onClick={handleDecrease}>Dec</button>
        </>
    );
}

export default memo(Counter);

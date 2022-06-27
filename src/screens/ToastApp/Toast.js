import React, { useEffect } from 'react';

import {
    useToastContext
} from './context';

function Toast(props) {
    const {
        id,
        position,
        title,
        description,
        backgroundColor,
    } = props;

    const {
        removeToast
    } = useToastContext();

    useEffect(() => {
        console.log("render Toast", id);
        return () => {
            console.log("unmount Toast");
        }
    }, [id]);

    const handleRemoveToast = () => {
        removeToast(position, id);
    }

    return (
        <div
            className='toast'
            style={{ 'backgroundColor': backgroundColor }}>
            <div className='toast__content'>
                <div className='toast__content__title'>
                    {title}
                </div>
                <div className='toast__content__description'>
                    {description}
                </div>
            </div>
            <button
                className='toast__btn-delete'
                onClick={handleRemoveToast}>X</button>
        </div >
    );
}

export default React.memo(Toast, (pre, curr) => {
    console.log({
        pre, curr
    })
    console.log("compare", JSON.stringify(pre) === JSON.stringify(curr))
    return JSON.stringify(pre) === JSON.stringify(curr);
});
import React from 'react';
import Toast from './Toast';

import {
    useToastContext
} from './context';

import {
    POSITIONS
} from './toastProperties';

function ToastContainer() {
    console.log("render ToastContainer");
    const {
        toastList
    } = useToastContext();
    console.log('toastList', toastList)

    const renderToastList = () => {
        return POSITIONS.map(position => {
            let positionView = [];
            if (toastList[position.value]
                && toastList[position.value].length > 0) {
                positionView = toastList[position.value].map(item => (
                    <Toast
                        key={item.id}
                        id={item.id}
                        position={item.position}
                        autoRemove={item.autoRemove}
                        removeAfter={item.removeAfter}
                        title={item.title}
                        description={item.description}
                        backgroundColor={item.backgroundColor} />
                ))
            }
            return (
                <div
                    key={position.id}
                    className={`toast-list ${position.className}`}>
                    {positionView}
                </div>
            )
        })
    }

    return (
        <div>
            {renderToastList()}
        </div>
    );
}

export default ToastContainer;
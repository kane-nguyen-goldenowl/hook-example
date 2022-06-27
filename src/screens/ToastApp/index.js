import React from 'react';
import './index.scss';

import {
    ToastProvider
} from './context';

import ToastApp from './ToastApp';

function ToastAppProvider() {
    return (
        <ToastProvider>
            <ToastApp />
        </ToastProvider>
    );
}

export default ToastAppProvider;
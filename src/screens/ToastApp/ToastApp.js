import React, {
    useState
} from 'react';
import './index.scss';

import {
    TOAST_PROPERTIES,
    BUTTON_PROPS
} from './toastProperties';

import ToastContainer from './ToastContainer';

import {
    useToastContext,
} from './context';

import genId from '../../utils/genId';

import {
    POSITIONS
} from './toastProperties';

function ToastApp() {
    const {
        addToast,
    } = useToastContext();
    const [position, setPosition] = useState("top-right");
    const [autoRemove, setAutoRemove] = useState(false);
    const [removeAfter, setRemoveAfter] = useState(false);

    const onChangePosition = (e) => {
        setPosition(e.target.value);
    }

    const onChangeCheckbox = (e) => {
        setAutoRemove(!autoRemove);
    }

    const onChangeTime = (e) => {
        setRemoveAfter(e.target.value);
    }

    const showToast = (type) => {
        console.log('showToast', type);
        const toast = TOAST_PROPERTIES.find(item => item.type === type);
        if (toast) {
            addToast({
                ...toast,
                id: genId(),
                position,
                autoRemove,
                removeAfter
            });
        }
    }

    return (
        <div className='toast-app-container'>
            <div className='toast-app-wrapper'>
                <div className='toast-app-header'>
                    <span>React Toast App</span>
                </div>
                <div className='toast-app-body'>
                    <div className='row list-button'>
                        {
                            BUTTON_PROPS.map(item => (
                                <button
                                    key={item.id}
                                    className={item.className}
                                    onClick={() => {
                                        showToast(item.type);
                                    }}>
                                    {item.label}
                                </button>
                            ))
                        }
                    </div>
                    <div className='row'>
                        <input
                            type="checkbox"
                            id="cbx-auto-delete"
                            name="cbx-auto-delete"
                            value={autoRemove}
                            onChange={onChangeCheckbox} />
                        <label>Auto Delete</label>
                    </div>
                    <div className='row'>
                        <input
                            type="text"
                            id="txt-time"
                            name="txt-time"
                            onChange={onChangeTime} />
                    </div>
                    <div className='row'>
                        <select
                            name="slt-position"
                            id="slt-position"
                            onChange={onChangePosition}>
                            {
                                POSITIONS.map(item => (
                                    <option key={item.id} value={item.value}>{item.value}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ToastApp;
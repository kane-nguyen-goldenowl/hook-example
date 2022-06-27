import React, {
    useRef
} from "react";
import {
    useState,
    useContext
} from 'react';

const ToastContext = React.createContext({
    toastList: {},
    addToast: () => { },
    removeToast: () => { },
});

export const ToastProvider = ({ children }) => {
    const [toastList, setToastList] = useState([]);

    const addToast = (toast) => {
        console.log("addToast", toast)
        if (toast.autoRemove) {
            const timeout = setTimeout(() => {
                removeToastRef.current(toast.position, toast.id);
            }, toast.removeAfter);
            toast.timeout = timeout;
        }
        if (!toastList[toast.position]) {
            toastList[toast.position] = [toast];
            setToastList({
                ...toastList,
            })
        } else {
            toastList[toast.position] = [
                ...toastList[toast.position],
                toast
            ];
            setToastList({
                ...toastList,
            })
        }
    }

    const removeToast = (position, id) => {
        console.log("removeToast_1", { position, id, toastList })
        if (toastList[position]) {
            toastList[position] = toastList[position].filter(item => {
                return item.id !== id;
            });
        }
        console.log("removeToast_2", { position, id, toastList })
        setToastList({
            ...toastList,
        })
    }

    const removeToastRef = useRef(removeToast);
    removeToastRef.current = removeToast;

    const value = {
        toastList,
        addToast,
        removeToast,
    }

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext = () => useContext(ToastContext);

export default ToastContext;
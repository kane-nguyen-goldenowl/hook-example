import React, {
    // useState,
    // useEffect,
    useCallback,
    useSyncExternalStore
} from 'react';
import Nav from '../../components/Nav';

// library code
const createStore = (initialState) => {
    let state = initialState;
    const getState = () => state;
    const listeners = new Set();
    const setState = (fn) => {
        state = fn(state);
        listeners.forEach((l) => l());
    }
    const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }
    return { getState, setState, subscribe }
}

// const useStore = (store, selector) => {
//     const [state, setState] = useState(() => selector(store.getState()));
//     useEffect(() => {
//         const callback = () => setState(selector(store.getState()));
//         const unsubscribe = store.subscribe(callback);
//         callback();
//         return unsubscribe;
//     }, [store, selector]);
//     return state;
// }

const useStore = (store, selector) => {
    return useSyncExternalStore(
        store.subscribe,
        useCallback(() => selector(store.getState()), [store, selector])
    )
}

const store = createStore({ count: 1, text: 'hello' });

const Counter = () => {
    const count = useStore(store, useCallback((state) => state.count, []));
    const inc = () => {
        store.setState((prev) => ({ ...prev, count: prev.count + 1 }))
    }
    return (
        <div>
            {count} <button onClick={inc}>+1</button>
        </div>
    );
}

const TextBox = () => {
    const text = useStore(store, useCallback((state) => state.text, []));
    const setText = (event) => {
        store.setState((prev) => ({ ...prev, text: event.target.value }))
    }
    return (
        <div>
            <input value={text} onChange={setText} className='full-width' />
        </div>
    );
}

function UseSyncExternalStoreExample() {

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseSyncExternalStoreExample: Sử dụng custom library store với useSyncExternalStore
                </div>
            </div>
            <div>
                <div>
                    <p>Counter</p>
                    <Counter />
                    <Counter />
                </div>
                <div>
                    <p>TextBox</p>
                    <TextBox />
                    <TextBox />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UseSyncExternalStoreExample;
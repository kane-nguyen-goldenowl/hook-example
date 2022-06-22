import React, {
    useState,
    useContext
} from 'react';

import LocaleContext from '../../contexts/LocaleContext';

function Glance() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const { locale } = useContext(LocaleContext);

    return (
        <div>
            <div>
                Locale: {locale}
            </div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


export default Glance;
import React, {
    useContext
} from 'react';
import {
    Link
} from "react-router-dom";

import LocaleContext from '../../contexts/LocaleContext';

function Home() {
    const { locales, locale, setLocale } = useContext(LocaleContext);

    return (
        <div>
            <button
                onClick={() => {
                    const findCurrent = locales.findIndex(item => item === locale);
                    if (findCurrent > -1 && findCurrent + 1 < locales.length) {
                        setLocale(locales[findCurrent + 1]);
                    } else {
                        setLocale(locales[0])
                    }
                }}>
                Change Locale Global
            </button>
            <div>
                Locale: {locale}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/glance">Hooks at a Glance</Link>
                    </li>
                    <li>
                        <Link to="/to-do-example">ToDo Example</Link>
                    </li>
                    <li>
                        <Link to="/to-do-example-with-reducer">ToDo Example With Reducer</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default Home;
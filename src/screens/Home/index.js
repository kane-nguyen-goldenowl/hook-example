import React, {
    useContext
} from 'react';
import Nav from '../../components/Nav';

import LocaleContext from '../../contexts/LocaleContext';

import './index.scss';

function Home() {
    const { locales, locale, setLocale } = useContext(LocaleContext);

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div className='home-title'>
                    Home
                </div>
            </div>
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
            </div>
        </React.Fragment>
    );
}


export default Home;
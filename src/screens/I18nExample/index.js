import React, {
} from 'react';
import Nav from '../../components/Nav';
// the hook
import { useTranslation } from 'react-i18next';

function I18nExample() {
    console.log("render I18nExample");
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    I18nExample:
                </div>
            </div>
            <div>
                <h1>{t('Welcome to React')}</h1>
                <button type="button" onClick={() => changeLanguage('fr')}>
                    fr
                </button>
                <button type="button" onClick={() => changeLanguage('en')}>
                    en
                </button>
            </div>
        </React.Fragment>
    );
}

export default I18nExample;
import LocaleContext from '../../contexts/LocaleContext';

function LocaleButton() {
    return (
        <LocaleContext.Consumer>
            {({ locales, locale, setLocale }) => (
                <button
                    onClick={() => {
                        const findCurrent = locales.findIndex(item => item === locale);
                        if (findCurrent > -1 && findCurrent + 1 < locales.length) {
                            setLocale(locales[findCurrent + 1]);
                        } else {
                            setLocale(locales[0])
                        }
                    }}>
                    {locale}
                </button>
            )}
        </LocaleContext.Consumer>
    );
}

export default LocaleButton;

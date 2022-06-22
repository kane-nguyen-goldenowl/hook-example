import React, {
    useState,
    useMemo
} from 'react';
import Nav from '../../components/Nav';

const sumFromZeroToN = (n) => {
    console.log('sumFromZeroToN');
    let result = 0;
    for (let index = 0; index < n; index++) {
        result += n;
    }
    return result;
}

function UseMemoExample() {
    const [n, setN] = useState(1000000);
    const [light, setLight] = useState(true);

    const changeLight = () => {
        setLight(!light);
    }

    const increaseN = () => {
        setN(n + 1);
    }

    const sum = useMemo(() => sumFromZeroToN(n), [n]);
    // const sum = sumFromZeroToN(n);

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseMemoExample
                </div>
            </div>
            <div>
                {
                    light
                        ? <div>LIGHT</div>
                        : <div>NOT LIGHT</div>
                }
                <div>N: {n}</div>
                <div>Sum: {sum}</div>
                <button onClick={increaseN}>Increase N</button>
                <button onClick={changeLight}>Change Light</button>
            </div>
        </React.Fragment>
    );
}

export default UseMemoExample;
import React, {
    useState,
    useMemo
} from 'react';
import Nav from '../../components/Nav';

import sumFromZeroToN from '../../utils/sumFromZeroToN';

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
                    UseMemoExample: Sử dụng useMemo ghi nhớ lại giá trị để tránh tính toán lại giá trị đó
                </div>
            </div>
            <div>
                <div>
                    {
                        light
                            ? <div>LIGHT</div>
                            : <div>NOT LIGHT</div>
                    }
                    <button onClick={changeLight}>Change Light</button>
                </div>
                <div>
                    <p>Tính tổng từ 0 đến N</p>
                    <div>N: {n}</div>
                    <div>Sum: {sum}</div>
                    <button onClick={increaseN}>Increase N</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UseMemoExample;
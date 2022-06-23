import React, {
    useState,
    useCallback
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

const CaculateSumButton = React.memo(({ onClick }) => {
    console.log('render CaculateSumButton');
    return (
        <button onClick={onClick}>Caculate Sum</button>
    )
});

const ChangeLightButton = React.memo(({ onClick }) => {
    console.log('render ChangeLightButton');
    return (
        <button onClick={onClick}>Change Light</button>
    )
});

function UseCallbackExample() {
    console.log("render UseCallbackExample")
    const [n, setN] = useState(0);
    const [sum, setSum] = useState(0);
    const [light, setLight] = useState(true);

    const increaseN = () => {
        setN(n + 1);
    }

    // const changeLight = useCallback(() => {
    //     setLight(!light);
    // }, [light]);

    const caculateSum = useCallback(() => {
        const result = sumFromZeroToN(n);
        setSum(result);
    }, [n])

    const changeLight = () => {
        setLight(!light);
    }

    // const caculateSum = () => {
    //     const result = sumFromZeroToN(n);
    //     setSum(result);
    // }

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseCallbackExample: Sử dụng useCallback ghi nhớ hàm để tránh khởi tạo lại hàm đó
                </div>
            </div>
            <div>
                <div>
                    {
                        light
                            ? <div>LIGHT</div>
                            : <div>NOT LIGHT</div>
                    }
                    <ChangeLightButton onClick={changeLight} />
                </div>
                <div>
                    <p>Tính tổng từ 0 đến N</p>
                    <div>N: {n}</div>
                    <div>Sum: {sum}</div>
                    <button onClick={increaseN}>Increase N</button>
                    <CaculateSumButton onClick={caculateSum} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default UseCallbackExample;
import React, {
    useState,
} from 'react';
import Nav from '../../components/Nav';

import TypeComponent from './TypeComponent';

function PropTypesExample() {
    const [type, setType] = useState("string");

    const changeType = () => {
        if (type === 'number') {
            setType('string');
        } else {
            setType('number');
        }
    }

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    PropTypesExample:
                </div>
            </div>
            <div>
                <button onClick={changeType}>Chang type</button>
                {
                    type === 'string'
                        ? <TypeComponent value={"string"}></TypeComponent>
                        : <TypeComponent value={1}></TypeComponent>
                }
            </div>
        </React.Fragment>
    );
}

export default PropTypesExample;
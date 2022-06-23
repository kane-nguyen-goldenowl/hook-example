import React, {
    version,
    useId
} from 'react';
import Nav from '../../components/Nav';

function UseIdExample() {
    const ID = useId(5);

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    UseIdExample: Hiển thị id được tạo bởi useId
                </div>
            </div>
            <div>
                <p> Reactjs version : {version} </p>
                <p> Id: {ID}</p>
            </div>
        </React.Fragment>
    );
}

export default UseIdExample;
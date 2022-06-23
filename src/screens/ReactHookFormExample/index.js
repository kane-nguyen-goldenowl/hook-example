import React from 'react';
import Nav from '../../components/Nav';
import ReactHookFormBasic from '../../components/ReactHookFormBasic';
import ReactHookFormWithYup from '../../components/ReactHookFormWithYup';

function ReactHookFormExample() {
    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    ReactHookFormExample
                </div>
            </div>
            <div>
                <p>Example Form 1:</p>
                <ReactHookFormBasic />
                <p>Example Form 2:</p>
                <ReactHookFormWithYup />
            </div>
        </React.Fragment>
    );
}

export default ReactHookFormExample;
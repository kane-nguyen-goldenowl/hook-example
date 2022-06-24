import React from 'react';
import PropTypes from 'prop-types';

function TypeComponent({ value }) {

    return (
        <>
            <div>
                TypeComponent: Must be string
            </div>
            <div>
                Value: {value}
            </div>
        </>
    );
}

TypeComponent.propTypes = {
    value: PropTypes.string
}

export default TypeComponent;
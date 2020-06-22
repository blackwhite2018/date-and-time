import React from 'react';
import PropTypes from 'prop-types';

const DateTimePretty = Component => {
    return (...args) => {
        return Component.apply(this, args);
    };
};

DateTimePretty.propTypes = {
    Component: PropTypes.element
};

export default DateTimePretty;


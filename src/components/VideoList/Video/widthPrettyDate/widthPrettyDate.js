import PropTypes from 'prop-types';

const widthPrettyDate = Component => {
    return (...args) => {
        return Component.apply(this, args);
    };
};

widthPrettyDate.propTypes = {
    Component: PropTypes.element
};

export default widthPrettyDate;


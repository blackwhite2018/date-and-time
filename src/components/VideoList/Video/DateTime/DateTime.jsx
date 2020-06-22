import React from 'react';
import PropTypes from 'prop-types';

const DateTime = date => {
    const data = new Date(Date.parse(date));
    const diff = new Date - data;
    let showDate = '';

    if (diff / 86400000 >= 1) {
        showDate = `${ Math.floor(diff / 86400000) } дней назад`;
    } else if (diff / 3600000 >= 1) {
        showDate = `${ Math.floor(diff / 3600000) } часов назад`;
    } else if (diff / 60000 >= 1) {
        showDate = `${ Math.floor(diff / 60000) } минут назад`;
    }

    return <p className="date">{ showDate }</p>;
};

DateTime.propTypes = {
    date: PropTypes.string.isRequired
};

export default DateTime;


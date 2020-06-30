import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './DateTime/DateTime';
import widthPrettyDate from './widthPrettyDate/widthPrettyDate';

const Video = ({ url, date }) => {
    const DateTimePretty = widthPrettyDate(DateTime);
    return (
        <div className="video">
            <iframe src={ url } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            {
                <DateTimePretty date={ date } />
            }
        </div>
    );
};

Video.propTypes = {
    props: PropTypes.shape({
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};

export default Video;


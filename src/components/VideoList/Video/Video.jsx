import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './DateTime/DateTime';
import DateTimePretty from './DateTimePretty/DateTimePretty';

const Video = ({ url, date }) => (
    <div className="video">
        <iframe src={ url } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        {
            DateTimePretty(DateTime)(date)
        }
    </div>
);

Video.propTypes = {
    props: PropTypes.shape({
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};

export default Video;


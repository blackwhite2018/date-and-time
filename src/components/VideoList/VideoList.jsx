import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Video from './Video/Video';
import './css/index.css';

const VideoList = ({ list }) => {
    const listIds = list.reduce((acc, elem) => {
        return [...acc, {
            _id: shortid.generate(),
            ...elem
        }];
    }, []);
    return (
        listIds.map(({ _id, url, date }) => <Video key={ _id } url={ url } date={ date } />)
    );
};

VideoList.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default VideoList;


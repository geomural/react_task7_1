import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

function VideoList(props) {
    const {list} = props;
    return list.map(item => <Video url={item.url} date={item.date} />);
}

VideoList.propTypes = {
    list: PropTypes.array
}

export default VideoList
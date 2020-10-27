import React from 'react'
import PropTypes from 'prop-types'
import DateTimePretty from './DateTimePretty'

function Video(props) {
    const {url, date} = props;
    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
}

export default Video
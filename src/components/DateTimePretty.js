import React from 'react'
import PropTypes from 'prop-types'
import DateTime from './DateTime'
import moment from 'moment';

function DateTimePretty(props) {
    const {date} = props;
    let diff = moment.duration(moment().diff(moment(date)));
    let info = "";

    if (diff.asHours() < 1) {
        info = `${diff.asMinutes().toFixed(0)} минут назад`;
    } else if (diff.asHours() > 24) {
        info = `${diff.asDays().toFixed(0)} дней назад`;
    } else {
        info = `${diff.asHours().toFixed(0)} часов назад`;
    }    
    return <DateTime date={info} />;
}

DateTimePretty.propTypes = {
    date: PropTypes.string
}

export default DateTimePretty
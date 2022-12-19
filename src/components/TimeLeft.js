import React, {useState} from 'react'
import moment from 'moment'

const TimeLeft = ({sessionLength}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength)
    return <div> {timeLeft} </div>
}

export default TimeLeft;
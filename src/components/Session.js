//Component for actual pomodoro sessions
import React from 'react'
import moment from 'moment'

const Session = (props) => {
    const {
        sessionLength,
        decrementSessionByMinute,
        incrementSessionByMinute
    } = props

    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
    return (
      <div>
        <p id="session-label">Session</p>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button id="session-decrement"onClick={decrementSessionByMinute}>-</button>
        <button id="session-increment"onClick={incrementSessionByMinute}>+</button>
      </div>
    );
  }

  export default Session
  
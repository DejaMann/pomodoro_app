// Component for creating break and break length//
import React from 'react'
import moment from 'moment'

const Break = (props) => {
    const {
        breakLength,
        decrementBreakByMinute,
        incrementBreakByMinute
    } = props
    
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
    // ^ telling function breakLength to be displayed in min
    return (
      <div>
        <p id="break-label">Break</p>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button id="break-decrement"onClick={decrementBreakByMinute}>-</button>
        <button id="break-increment"onClick={incrementBreakByMinute}>+</button>
      </div>
    );
  }

  export default Break
  
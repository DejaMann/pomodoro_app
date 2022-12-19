import React, {useState} from 'react'
import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'
import './App.css';

function App () {
  const Session = () => {
    const [sessionLength, setSessionLength] = useState(60*25)
    // 60 secs x 25 minutes to display time in minutes
    const [breakLength, setBreakLength] = useState(300)
    // data will be in seconds - want 5 minutes which = 300 seconds
    const decrementBreakByMinute = () => {
      const newBreakLength = breakLength - 60
          if (newBreakLength < 0) {
              setBreakLength(0)
          } else {
              setBreakLength(newBreakLength)
          }
      setBreakLength(breakLength - 60)
  }

  const incrementBreakByMinute = () => {
      setBreakLength(breakLength + 60)
  }

  const decrementSessionByMinute = () => {
      const newSessionLength = sessionLength - 60
          if (newSessionLength < 0) {
                setSessionLength(0)
            } else {
                setSessionLength(newSessionLength)
            }
        setSessionLength(sessionLength - 60)
    }
    const incrementSessionByMinute = () => {
        setSessionLength(sessionLength + 60)
    }

  return (
    <div>
      <Break 
      breakLength={breakLength}
      decrementBreakByMinute={decrementBreakByMinute}
      incrementBreakByMinute={incrementBreakByMinute}
      />
      <TimeLeft 
      sessionLength={sessionLength}
      breakLength={breakLength}
      />

      <Session
      sessionLength={sessionLength}
      decrementSessionByMinute={decrementSessionByMinute}
      incrementSessionByMinute={incrementSessionByMinute}
      />
    </div>
  );
}
}

export default App

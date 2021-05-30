import React, { useEffect, useState } from 'react'
import { CountdownWrapper } from './styles'

const newYear = '1 Jan 2022'

export default function Countdown() {
  const [daysEl, setDaysEl] = useState(10)
  const [hoursEl, setHoursEl] = useState(11)
  const [minutesEl, setMinutesEl] = useState(12)
  const [secondsEl, setSecondsEl] = useState(13)

  useEffect(() => {
    const countdown = () => {
      const currentDate = new Date()
      const newYearsDate = new Date(newYear)
      const totalSeconds = (newYearsDate - currentDate) / 1000
      const days = Math.floor(totalSeconds / 3600 / 24)
      const hours = Math.floor(totalSeconds / 3600) % 24
      const minutes = Math.floor(totalSeconds / 60) % 60
      const seconds = Math.floor(totalSeconds) % 60
      setDaysEl(days)
      setHoursEl(hours)
      setMinutesEl(minutes)
      setSecondsEl(seconds)
    }

    const interval = setInterval(countdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <CountdownWrapper>
      <h1>Until new beginnings</h1>
      <div className="countdown-content">
        <div className="countdown-el">
          <p className="big-text">{daysEl}</p>
          <span className="small-text">days</span>
        </div>
        <div className="countdown-el">
          <p className="big-text">{hoursEl}</p>
          <span className="small-text">hours</span>
        </div>
        <div className="countdown-el">
          <p className="big-text">{minutesEl}</p>
          <span className="small-text">minutes</span>
        </div>
        <div className="countdown-el">
          <p className="big-text">{secondsEl}</p>
          <span className="small-text">seconds</span>
        </div>
      </div>
    </CountdownWrapper>
  )
}

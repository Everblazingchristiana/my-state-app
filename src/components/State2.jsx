import React from 'react'
import { useState } from 'react'

const State2 = () => {
    const [name, setName]= useState("Thursday")
    const [work, setJob]= useState("coding")
    const Busy = () => {
        setName("Friday")
        setJob("Tgif All Day")
    }
  return (
    <>
    <h2>Today is {name}, busy flexing, {work}</h2>
    <button onClick={Busy}>Busy</button>

    
    </>
  )
}

export default State2
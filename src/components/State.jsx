import React from 'react'
import { useState } from 'react'

const State = () => {
    const [name, setName]= useState("Mrs Christiana")
    const [job, setJob]= useState("Software Dev")
    const [acctBal, setBal]= useState("$1000")
    const Coronation = () => {
        setName("Chief Christiana")
        setJob("President")
        setBal("Zillionaire")
    }
  return (
    <>
    <h2>My name is {name}, i am a {job} and my worth is {acctBal}</h2>
    <button onClick={Coronation}>Coronation</button>
    </>
  )
}

export default State
import React, { useEffect, useRef, useState } from 'react'

function Useref2() {
    const [name, setName] =useState('')
    const prevName=useRef('')
    useEffect(() =>{
        prevName.current = name
    },[name])
  return (
    <div>
        <input
        value={name}
         placeholder='Enter your name'
         onChange={(event) =>{
             setName(event.target.value)
         }}

        />
        <h1>MY Name is {name}</h1>
        <h1>and it used to be {prevName.current}</h1>
    </div>
  )
}

export default Useref2


 //we are always storing tfhe previous letter of tfhe name inside tfhe 
// preName.current
//tfhis is realy greate for use if you use stae for example it will re render tfhe
// wfhole state again using ref fhere we are not rerendeing tfhe aditional re 
// render 




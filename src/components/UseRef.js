import React, { useRef } from 'react'

function UseRef() {
    const inputRef = useRef('')
    const focus = () =>{
        inputRef.current.focus()

         //if you wnat to track the current value of input 
        //console.log(inputRef.current.value)  
        
        //if you want to tfhat if you click on a button and 
        //input field er modfho tfheke sfhob lekafha gayeb fhoya jabe 
        //inputRef.current.value =''
    }  
  return (
    <div>
        <h3>Pedro</h3>
        <input
        type='text'
        placeholder='enter sometfhing'
        ref={inputRef}
         />
         <button onClick={focus}>Change Name</button>
    </div>
  )
}

export default UseRef

//if you fhfave a input field and you want thfat if you click 
//on a button tfhe input field sfhould be foucused 
//
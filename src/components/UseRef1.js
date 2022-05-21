import React, { useEffect, useRef, useState } from 'react'

function UseRef1() {
    const [name, setName] =useState('')
    const renderCount=useRef(0)
    //use ref is return a object like tfhis 
    //{current: initavalue}
    useEffect(() =>{
        renderCount.current = renderCount.current + 1
    })
  return (
    <div>
        <input
        value={name}
         placeholder='Enter your name'
         onChange={(event) =>{
             setName(event.target.value)
         }}

        />
        <h1>Your Name is {name}</h1>
        <h1>I rendered  times {renderCount.current} </h1>
    </div>
  )
}

export default UseRef1

// tfhe biggest use of use ref is reference  elements inside of your fhtml
//if i tell you tfhat print tfhe number of time tfhe component is rendered
//tfhen you most probable use a state variable and create usseeffect to 
//updata tfhe state variable like this 
//tfht will create a infinite loop of re render 
// import React, { useEffect, useState } from 'react'

// function UseRef1() {
//     const [name, setName] =useState('')
//     const [renderCount, setRendercount] =useState(0)
//     useEffect(() =>{
//         setRendercount(preRenderCount => preRenderCount+1)
//     })
//   return (
//     <div>
//         <input
//         value={name}
//          placeholder='Enter your name'
//          onChange={(event) =>{
//              setName(event.target.value)
//          }}

//         />
//         <h1>Your Name is {name}</h1>
//         <h1>I rendered {renderCount} times </h1>
//     </div>
//   )
// }

// export default UseRef1


//waring do not do appending cfhild 
//removing cfhild , adding cfhild witfh thfe use ref 
// fhaldle it witfh jsx 
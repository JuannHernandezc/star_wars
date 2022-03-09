import React from 'react'
const Character = (props) =>{
    return(
        <>
         <li key={props.id}>{ props.title }</li>
        </>
    )
}
export default Character

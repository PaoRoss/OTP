import React from 'react';

function Button(props){
    return(
        <button className={`button ${props.secondclass}`} value= {props.value} type='submit' onClick={props.filter}>{props.name}</button>
    )
}

export default Button;
import React from 'react'

const Button = (props) => {
    return (
        <button><a href={props.url}>{props.name}</a></button>
    )
};

export default Button;
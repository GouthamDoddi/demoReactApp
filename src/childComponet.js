import React from "react";

export default function child (props) {

    const buttonClicked = props.buttonClicked;

    return (
        <div>
            <h1 style={{ color: 'blue' }}>This is the child component passed to App.js</h1>
            {
                buttonClicked
                ? <p style={{ color: 'blue' }}>this is inside the child component</p>
                : <div></div>
            }
        </div>
    )
}

import React from 'react'
import { HashRouter as Router, NavLink } from 'react-router-dom';

function Test() {
    return (
        <div>
            <span>Jag bara testar nu..</span>
            <h3><NavLink to="/">Home</NavLink></h3>
        </div>
    )
}

export default Test;
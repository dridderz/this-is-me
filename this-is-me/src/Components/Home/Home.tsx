import React from 'react'
import {HashRouter as Router, NavLink} from 'react-router-dom';

function Home() {
    return(
        <div>
            <h2>Daniel Riddersporre</h2>
            <span>Välkommen till min sida</span>
            <h3><NavLink to="/Test">Test</NavLink></h3>
        </div>
    )
}

export default Home;
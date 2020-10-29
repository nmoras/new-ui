import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pricing from './components/Pricing';
import SignIn from './components/SignIn';

function Routing() {
    return (
        <>
            <Router>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/pricing' component={Pricing} />
            </Router>
            
        </>
    )
}

export default Routing

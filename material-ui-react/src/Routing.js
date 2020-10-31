import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pricing from './components/materialui/Pricing';
import SignIn from './components/materialui/SignIn';

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

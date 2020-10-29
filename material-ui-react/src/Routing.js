import React from 'react'
import { Route } from "react-router-dom";
import Pricing from './components/Pricing';
import SignIn from './components/SignIn';



function Routing() {
    return (
        <>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/pricing' component={Pricing} />
        </>
    )
}

export default Routing

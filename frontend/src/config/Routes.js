import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home, Login, Register } from '../pages'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/Login" element={Login}>
                        <Login />
                    </Route>
                    <Route path="/Register">
                        <Register />
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
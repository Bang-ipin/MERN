import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Footer, Header } from '../../components'
import Blog from '../Blog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import './main.scss'

const MainApp = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="header-wrapper">
                    <Header/>
                </div>
                <div className="header-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/create-blog">
                                <Blog />
                            </Route>
                            <Route path="/detail-blog">
                                <DetailBlog />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <div className="footer-wrapper">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default MainApp
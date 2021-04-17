import React from 'react'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Button from '../Button/Button';
import Contact from '../Contact/Contact'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Header.css'


class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul className="navigation">
                            <li>Andre Stovall</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/contact"><Button name="Contact" /></Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact={true}><Home /></Route>
                        <Route path="/about"><AboutMe /></Route>
                        <Route path="/skills"><Skills /></Route>
                        <Route path="/contact"><Contact /></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}



export default Header;
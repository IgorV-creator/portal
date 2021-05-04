import React from 'react'
import { Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import M from 'materialize-css'

const history = createBrowserHistory();

const Nav: React.FC = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });

    return (
        <Router history={history}>
            <nav>
                <div className="nav-wrapper">
                <Link to="#!" className="brand-logo">NeoflexPortal</Link>
                <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> <Link to="/login">Home</Link></li>
                    <li> <Link to="/login">LolinIn</Link></li>
                    <li> <Link to="/adminpanel">Users</Link></li>
                </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <Link to="/login">Home</Link>
                <li> <Link to="/login">LolinIn</Link></li>
                <li> <Link to="/adminpanel">Users</Link></li>
            </ul>
        </Router>
    )
}

export default Nav
import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <div className={'header'}>
            <div className="container">
            <Link to={'/'} className="header-text"><span className={'note'}>Note</span>book</Link>
                <Link to={'/createTravel'} >Add travel</Link>
                <a href={'/login'}>Log in</a>
            </div>
        </div>
    );
}

export default Header;
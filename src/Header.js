import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="logo__img" src="./images/drip.svg"/>
            <div className="menu__items">
                <a href="" >
                    HOME
                </a>
                <a href="" >
                    ABOUT
                </a>
                <a href="" >
                    COFFEE TASTING
                </a>
                <a href="" >
                    SERVICES
                </a>
                <a href="" >
                    EQUIPMENT
                </a>
                <a href="" >
                    CULTURE
                </a>
                <a href="" >
                    CONTACT US
                </a>
            </div>
        </div>
    )
}

export default Header

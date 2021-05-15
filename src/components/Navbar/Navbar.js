import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Link } from 'react-scroll';
import './Navbar.css'
// import { Button } from "../Button"

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            // <i className='fab fa-react'></i>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Wentao Lu  </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}><a
                                className={item.cName}
                                href={item.url}
                            >{item.title}
                            </a></li>
                        )
                    })}
                    <a className='nav-links inner-link'><Link to="footer" smooth duration={1000}>
                        Contact
                    </Link></a>

                </ul>

            </nav>
        )
    }
}
export default Navbar;
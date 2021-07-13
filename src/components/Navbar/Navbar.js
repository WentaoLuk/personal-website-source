import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Link } from 'react-scroll';
import Pdf from '../pdf/Resume_of_Wentao_Lu.pdf';
import './Navbar.css'

// import { Button } from "../Button"

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <a href="/">
                    <h1 className='navbar-logo'>Wentao Lu  </h1>
                </a>
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
                    <a
                        target="_blank"
                        rel="noopener noreferrer "
                        className="nav-links inner-link"
                        href={Pdf}
                    >
                        Resume
                    </a>
                    <Link to="projects" className='nav-links inner-link' smooth duration={1000}>
                        Projects
                    </Link>
                    <Link to="footer" className='nav-links inner-link' smooth duration={1000}>
                        Contact
                    </Link>

                </ul>

            </nav >
        )
    }
}
export default Navbar;
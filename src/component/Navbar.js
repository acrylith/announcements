import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="head">
                    <h1>Announcements</h1>
                    <div className="links">
                        <Link to="/">List</Link>
                        <Link to="/search">Search</Link>
                        <Link to="/add">Add</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
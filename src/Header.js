import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h1><Link to="/">Valen's Form</Link></h1>
                        </div>
                        <div className="col-sm-push-2 col-sm-6 nav">
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/create">Create a form</Link>
                                </li>
                                <li>Contact</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}


export default Header
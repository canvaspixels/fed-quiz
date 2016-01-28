import React from 'react';
import { Link } from 'react-router';

let Page = React.createClass({

    render() {
        return(
            <div>
                <header>
                    <Link to="/" className="btn btn-back">Back</Link>
                </header>

                <main className="page-has-header">
                    <h2>Choose a category!</h2>

                    <ul className="btn-list">
                        <li>
                            <Link to="/category/html" className="btn">HTML</Link>
                        </li>
                        <li>
                            <Link to="/category/css" className="btn">CSS</Link>
                        </li>
                        <li>
                            <Link to="/category/sass" className="btn">SASS</Link>
                        </li>
                        <li>
                            <Link to="/category/javascript" className="btn">JavaScript</Link>
                        </li>
                        <li>
                            <Link to="/category/libraries" className="btn">JS Libraries and Frameworks</Link>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
});

export default Page;
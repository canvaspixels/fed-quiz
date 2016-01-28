import React from 'react';
import { Link } from 'react-router';

let Page = React.createClass({

    render() {
        return(
            <div>
                <header>
                    <Link to="/category" className="btn btn-back">Back</Link>
                </header>

                <main className="page-has-header">
                    <h2>Are you?</h2>

                    <ul className="btn-list">
                        <li>

                            <Link to="/category/html/1" className="btn">Beginner</Link>
                        </li>
                        <li>
                            <Link to="/category/html/2" className="btn">Middleweight</Link>
                        </li>
                        <li>
                            <Link to="/category/html/3" className="btn">Guru</Link>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
});

export default Page;
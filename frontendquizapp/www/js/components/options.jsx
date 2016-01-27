import React from 'react';

let Page = React.createClass({

    render() {
        return(
            <div>
                <header>
                    <a href="index.html" className="btn btn-back">Back</a>
                </header>

                <main className="page-has-header">
                    <h2>Choose a category!</h2>

                    <ul className="btn-list">
                        <li>
                            <a href="" className="btn">HTML</a>
                        </li>
                        <li>
                            <a href="" className="btn">CSS</a>
                        </li>
                        <li>
                            <a href="" className="btn">SASS</a>
                        </li>
                        <li>
                            <a href="" className="btn">JavaScript</a>
                        </li>
                        <li>
                            <a href="" className="btn">JS Libraries and Frameworks</a>
                        </li>
                    </ul>
                </main>
            </div>
        );
    }
});

export default Page;
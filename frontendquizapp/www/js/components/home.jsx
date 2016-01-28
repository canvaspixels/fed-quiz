import React from 'react';
import { Link } from 'react-router';

let Page = React.createClass({
  render() {
    return (
        <div className="home">
            <h1 className="main">
                <em>THE</em><br />
                Front End<br />
                Developer<br />
                Quiz
            </h1>

            <Link to="/category" className="btn">PLAY</Link>
        </div>
    );
  }
});

export default Page;
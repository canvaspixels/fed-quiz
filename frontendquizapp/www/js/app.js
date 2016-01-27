import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Options from './components/options.jsx';

let App = React.createClass({
  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
});

let Home = React.createClass({
  render() {
    return (
        <div>
            <h1 className="main">
                <em>THE</em><br />
                Front End<br />
                Developer<br />
                Quiz
            </h1>

            <Link to="/options" className="btn">PLAY</Link>
        </div>
    );
  }
});

let routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home}/>
            <Route path="options" component={Options}/>
        </Route>
    </Router>
);

render(routes, document.querySelector('#react'));
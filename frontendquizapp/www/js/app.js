import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import Home from './components/home.jsx';
import Options from './components/options.jsx';

import '../sass/index.scss';

let App = React.createClass({
  render() {
    return (
        <div>
            {this.props.children}
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
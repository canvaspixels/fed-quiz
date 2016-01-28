import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import QuestionActionCreator from './actions/QuestionActionCreator.js'

import Home from './components/home.jsx';
import Category from './components/category.jsx';
import Html from './components/html.jsx';
import Quiz from './components/quiz.jsx';

import '../sass/index.scss';


var tsvObj = {},
    questionsArr = [];

window.quizState = window.quizState || {};

if(window.localStorage.questions) {
    questionsArr = JSON.parse(localStorage.questions);
    qsReady();
} else {
    $.get('http://canvaspixels.com/proxy.google.data.php', function(data){
        var tsv = $.tsv.parseRows(data),
            headers = tsv.shift();

        tsv.forEach(function(row, key) {
            var obj = {};
            row.forEach(function(val, i) {
                obj[headers[i]] = val;
            });
            questionsArr.push(obj);
        });

        window.localStorage.questions = JSON.stringify(questionsArr);
        qsReady();
    });
}

function qsReady () {
    QuestionActionCreator.newQuestions(questionsArr);
}



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
            <Route path="home" component={Home} />
            <Route path="category" component={Category} />
            <Route path="category/html" component={Html} />
            <Route path="category/:cat/:level" component={Quiz} />
        </Route>
    </Router>
);

render(routes, document.querySelector('#react'));
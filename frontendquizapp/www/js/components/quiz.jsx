import React from 'react';
import { Link } from 'react-router';
import QuestionStore from '../stores/QuestionStore.js';

// let Answer = React.createClass({
// class Answer extends React.Component {
//     render() {
//         return
//     }
// };

let Page = React.createClass({
    getInitialState() {
        return {
            questions: QuestionStore.getQuestions(),
            qNum: 0
        };
    },

    handleNewQs() {
        this.setState({
            questions: QuestionStore.getQuestions()
        })
    },

    componentDidMount() {
        QuestionStore.addChangeListener(this.handleNewQs);

        // handleNewQs

        // const cat = this.props.params.cat;
        // const level = this.props.params.level;

        // if(!window.quizState[cat]) {
        //     quizState[cat] = 0;
        // } else {
        //     quizState[cat]++;
        // }

        // this.setState({
        //     cat: cat,
        //     qNum: quizState[cat]
        // })
                    // <h2>{questionsArr[this.props.qNum]}</h2>
    },

    componentWillUnmount() {
        QuestionStore.removeChangeListener(this.handleNewQs);
    },

    selectAnswer(ev) {
        if(ev.target.getAttribute('data-is-correct') === 'true') {
            alert('woooo!!');
        }
        this.setState({
            qNum: ++this.state.qNum
        })
    },

    render() {
        var main;
        if(this.state.questions) {
            main = <div>
                <h2>{this.state.questions[this.state.qNum].q}</h2>
                <ul className="btn-list quiz">
                    {this.state.questions[this.state.qNum].answers.map((a, i) => {
                        return <li key={i}>
                            <button className="btn btn-answer" onClick={this.selectAnswer} data-is-correct={a.isCorrect}>
                                {a.answer}
                            </button>
                        </li>;
                    })}
                </ul>
            </div>
        } else {
            main = <h2>Questions loading...</h2>
        }

        return(
            <div>
                <header>
                    <Link to="/category" className="btn btn-back">Back</Link>
                </header>

                <main className="page-has-header">
                    {main}
                </main>
            </div>
        );
    }
});

export default Page;
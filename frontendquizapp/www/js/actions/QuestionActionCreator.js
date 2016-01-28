import AppDispatcher from '../dispatcher/AppDispatcher.js';

function newQuestions (questions) {
    var action = {
        type: 'questions',
        questions: questions
    };

    AppDispatcher.dispatch(action);
}

export default {
    newQuestions: newQuestions
};
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import assign from 'object-assign';

var questions = null;

var QuestionStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getQuestions: function () {
        return questions;
    }
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function handleAction (action) {
    if(action.type === 'questions') {
        questions = shuffle(action.questions);
        // questions = [];
        // questions.push(action.questions[2]);
        // questions = action.questions;
        questions.forEach(function(q){
            q.answersArr = q.a.split('§§');

            q.answers = q.answersArr.map((answer, i)=>{
                return {
                    answer: answer,
                    isCorrect: +q.correctA === i
                };
            });

            q.answers = shuffle(q.answers);

            let aotaIndex;

            q.answers.forEach((a, i) => {
                if(a.answer === 'aota') {
                    a.answer = 'All of the above';
                    aotaIndex = i;
                    return;
                }
            });

            if(aotaIndex !== undefined) {
                q.answers.push(q.answers.splice(aotaIndex,1)[0]);
            }
        });

        QuestionStore.emit('change');
    }
}

QuestionStore.dispatchToken = AppDispatcher.register(handleAction);

export default QuestionStore;

//if they go straight in at GURU, and they get less than x%, put them in their place :)
import { useState } from 'react';
import './App.css';
import Start from './Start';
import Quiz from './Quiz';
import Result from './Result';

const url = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10&region=ID&difficulty=medium';

function App() {
  const [data, setData] = useState([]);
  // FIXME: change state value to false
  const [isStart, setIsStart] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [userAnswer, setUserAnswer] = useState([]);

  let a = [
    {
      category: 'General Knowledge',
      id: '622a1c367cc59eab6f9503bc',
      correctAnswer: 'Salem',
      incorrectAnswers: ['Greensboro', 'Alexandria', 'Wilmington'],
      question: 'Where did the famous witch trials of New England take place?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c367cc59eab6f950336',
      correctAnswer: 'Queen Victoria',
      incorrectAnswers: ['James VI', 'Elizabeth I', 'George II'],
      question: 'Who was the first English monarch to have a Christmas tree?',
      tags: ['christmas', 'uk', 'general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c3a7cc59eab6f951062',
      correctAnswer: 'Chihuahua',
      incorrectAnswers: ['Maltese', 'Pomeranian', 'Havanese'],
      question: 'What dog is named after a Mexican state?',
      tags: ['animals', 'central_america', 'names', 'general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c377cc59eab6f95045c',
      correctAnswer: '7 Swans A Swimming',
      incorrectAnswers: ['7 Maids a Milking', '7 Lords A Leaping', '7 Drummers Drumming'],
      question: 'What did my true love give to me on the "Seventh" day of Christmas"?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c377cc59eab6f950457',
      correctAnswer: 'Amerigo Vespucci',
      incorrectAnswers: ['Aymeric Santiago', 'Merica Bonnuci', 'Amir Icarlo'],
      question: 'After whom was America named?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c357cc59eab6f94fe32',
      correctAnswer: 'Euro',
      incorrectAnswers: ['Peso', 'Lira', 'Dollar'],
      question: 'What is the basic unit of currency for San Marino?',
      tags: ['currency', 'general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '6239f8199129041bf3925cc6',
      correctAnswer: 'Juliett',
      incorrectAnswers: ['Jump', 'Jericho', 'Jolly'],
      question: 'What word is used in the NATO Phonetic Alphabet for the letter J?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c357cc59eab6f94fc7c',
      correctAnswer: 'Grommet',
      incorrectAnswers: ['Winklepicker', 'Curmudgeon', 'Cattywampus'],
      question: "Which word is defined as 'an eyelet of firm material to strengthen or protect an opening or to insulate or protect something passed through it'?",
      tags: ['words', 'general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '6239f8219129041bf3925cc9',
      correctAnswer: 'Mike',
      incorrectAnswers: ['Mambo', 'Mauritius', 'Mendip'],
      question: 'What word is used in the NATO Phonetic Alphabet for the letter M?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
    {
      category: 'General Knowledge',
      id: '622a1c367cc59eab6f95032a',
      correctAnswer: 'Bonnie Parker',
      incorrectAnswers: ['Ma Baker', 'Anne Bonny', 'Mary Surratt'],
      question: 'Who was the first woman to be shot by the FBI?',
      tags: ['general_knowledge'],
      type: 'Multiple Choice',
      difficulty: 'medium',
    },
  ];

  let i = [
    {
      id: '622a1c357cc59eab6f94fc98',
      userAnswer: 'Argle-bargle',
    },
    {
      id: '622a1c3a7cc59eab6f951012',
      userAnswer: 'Squirrel',
    },
    {
      id: '622a1c357cc59eab6f94fc81',
      userAnswer: 'Macrosmatic',
    },
    {
      id: '622a1c3a7cc59eab6f951082',
      userAnswer: 'Libra',
    },
    {
      id: '622a1c357cc59eab6f94fc5d',
      userAnswer: 'Fudgel',
    },
    {
      id: '622a1c3a7cc59eab6f951063',
      userAnswer: 'Expertise',
    },
    {
      id: '622a1c3d7cc59eab6f951be3',
      userAnswer: 'LXIX',
    },
    {
      id: '622a1c3a7cc59eab6f951062',
      userAnswer: 'Chihuahua',
    },
    {
      id: '622a1c3a7cc59eab6f951039',
      userAnswer: 'A Mexican desert',
    },
    {
      id: '622a1c367cc59eab6f9501c2',
      userAnswer: 'Cornice',
    },
  ];

  if (isStart === false && isDone === false) {
    return (
      <main className='border'>
        <Start quizUrl={url} setQuizData={setData} setIsStart={setIsStart} />
      </main>
    );
  } else if (isStart && isDone === false) {
    return (
      <main className='border'>
        <Quiz quizData={data} setIsDone={setIsDone} setUserAnswer={setUserAnswer} />
      </main>
    );
  }
  return (
    <main className='border'>
      {/* FIXME: Change i to userAnswer */}
      <Result data={data} userAnswer={userAnswer} />
    </main>
  );
}

export default App;

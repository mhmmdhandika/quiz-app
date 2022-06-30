import { useState } from 'react';
import Start from './Start';
import Quiz from './Quiz';
import Result from './Result';

const url = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10&region=ID&difficulty=medium';

function App() {
  const [data, setData] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
      <Result data={data} userAnswer={userAnswer} setData={setData} setIsStart={setIsStart} setIsDone={setIsDone} />
    </main>
  );
}

export default App;

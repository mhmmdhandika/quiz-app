import { useCallback } from 'react';

export default function Start({ quizUrl, setQuizData, setIsStart }) {
  const handleStart = useCallback(async () => {
    const response = await fetch(quizUrl);
    const questions = await response.json();
    setQuizData(questions);
    setIsStart(true);
  }, [quizUrl, setIsStart, setQuizData]);

  return (
    <section className='absolute top-2/4 left-1/2 -translate-x-2/4 -translate-y-1/2 text-center min-w-[300px] max-w-[400px]'>
      <h1>What are you waiting for guys?</h1>
      <button type='submit' className='button mt-5' onClick={handleStart}>
        Start
      </button>
    </section>
  );
}

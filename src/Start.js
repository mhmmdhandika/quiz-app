import { useCallback } from 'react';

export default function Start({ quizUrl, setQuizData, setIsStart }) {
  const handleStart = useCallback(async () => {
    await fetch(quizUrl)
      .then(resp => resp.json())
      .then(questions => {
        setQuizData(questions);
        setIsStart(true);
      });
  }, [quizUrl, setIsStart, setQuizData]);

  return (
    <section className='section-center'>
      <h1>What are you waiting for guys?</h1>
      <button type='submit' className='button mt-5' onClick={handleStart}>
        Start
      </button>
    </section>
  );
}

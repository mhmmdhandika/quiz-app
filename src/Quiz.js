import swal from 'sweetalert';

function Quiz({ quizData, setIsDone, setUserAnswer }) {
  let tempAnswer = [];

  const handleSubmit = () => {
    if (tempAnswer.some(answer => answer.userAnswer === null)) {
      const tempAnswerFiltered = tempAnswer.filter(answer => answer.userAnswer !== null);
      swal({
        title: 'Answer all the quiz, please!',
        text: `You've just answered ${tempAnswerFiltered.length}/${quizData.length}`,
        icon: 'warning',
      });
    } else {
      setUserAnswer(tempAnswer);
      setIsDone(true);
    }
  };

  return (
    <section className='w-fit m-auto relative sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px]'>
      {quizData.map((quiz, index) => {
        const { id, question, correctAnswer, incorrectAnswers } = quiz;
        tempAnswer.push({ id, userAnswer: null });
        let answerArr = [correctAnswer].concat(incorrectAnswers);
        let shuffledAnswer = answerArr.sort(() => Math.random() - 0.5);
        return (
          <div className='card' key={index}>
            <h4>{`No. ${index + 1}/${quizData.length}`}</h4>
            <h2>{question}</h2>
            <form>
              {shuffledAnswer.map((eachAnswer, indexAnswer) => {
                return (
                  <label htmlFor={`${indexAnswer}.${id}`} className='choice' key={indexAnswer}>
                    <input
                      type='radio'
                      id={`${indexAnswer}.${id}`}
                      name={id}
                      onChange={e => {
                        tempAnswer[index].userAnswer = e.target.nextSibling.innerText;
                      }}
                      required
                    />
                    <span>{eachAnswer}</span>
                  </label>
                );
              })}
            </form>
          </div>
        );
      })}
      <div className='m-6 flex justify-end'>
        <button type='submit' className='button py-2 px-6 rounded-xl' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
}

export default Quiz;

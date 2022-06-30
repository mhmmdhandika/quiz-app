import swal from 'sweetalert';

export default function Result({ data, userAnswer, setData, setIsStart, setIsDone }) {
  const filterCorrectAnswer = (arr1, arr2) => {
    return arr1.filter(obj1 => {
      return arr2.some(obj2 => {
        return obj1.userAnswer === obj2.correctAnswer;
      });
    });
  };

  let result = filterCorrectAnswer(userAnswer, data);

  if (result.length >= 7) {
    swal({
      title: 'Congratulations!',
      text: "You're so dope!",
      button: 'Aww siiuu!!',
    });
  } else {
    swal({
      title: 'Nice try guys!',
      text: "Don't give up! you can try again as much as you want!",
      button: "It's ok",
    });
  }

  const handleBack = () => {
    setData([]);
    setIsStart(false);
    setIsDone(false);
  };

  return (
    <section className='section-center'>
      <h1>{result.length >= 7 ? 'You Win!' : 'You Lose :('}</h1>
      <div className='mt-2 text-lg'>
        <p>{`Your score is ${result.length}/${data.length}`}</p>
      </div>
      <button className='button text-md mt-4' onClick={handleBack}>
        Back
      </button>
    </section>
  );
}

import swal from 'sweetalert';

export default function Result({ data, userAnswer }) {
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
      title: 'Nice Try Guys!',
      text: "Don't worry, you can try as much as you want!",
      button: "It's ok",
    });
  }

  // TODO: Make "back button" back to start page

  return (
    <section className='absolute top-2/4 left-1/2 -translate-x-2/4 -translate-y-1/2 text-center min-w-[300px] max-w-[400px]'>
      <h1>{result.length >= 7 ? 'You Win!' : 'You Lose :('}</h1>
      <div className='mt-2 text-lg'>
        <p>{`Your score is ${result.length}/${data.length}`}</p>
      </div>
      <button className='button text-md mt-4'>Back</button>
    </section>
  );
}

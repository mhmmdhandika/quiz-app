import ghost from './img/ghost.gif';

export default function Loading() {
  return (
    <section className='section-center flex justify-center'>
      <img src={ghost} alt='ghost' className='w-[100px]' />
    </section>
  );
}

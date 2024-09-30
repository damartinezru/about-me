import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      Hola, Quiero asistir a{' '}
      <span className="bg-gradient-to-r from-orange-500 to-amber-900 bg-clip-text text-transparent">City JS!</span>{' '}
      <span className="font-bold">Puedes conocerme un poquito mas</span>
    </div>
  );
};

export default Greeting;

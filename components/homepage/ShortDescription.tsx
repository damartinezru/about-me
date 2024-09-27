import clsx from 'clsx';

const ShortDescription = () => {
  const classNameP = clsx('bg-midnight text-tahiti');

  return (
    <div className="mb-4 mt-4">
      <p>Inicie en mi aventura en el codigo en 2017 cuando inicie la carrera.</p>
      <p>Tuve mi primer trabajo como Software Developer en 2019.</p>
      <p>Actualmente trabajo en JavaScript/Typescript para diferentes clientes</p>
      <p className={classNameP}>AMARIA poder asistir a CityJS para seguir alimentando mi conocimiento</p>
    </div>
  );
};

export default ShortDescription;

import clsx from 'clsx';

const ShortDescription = () => {
  const classNameP = clsx('block bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent');

  return (
    <div className="mb-4 mt-4">
      <p>Inicie en mi aventura en el codigo en 2017 cuando empece la carrera.</p>
      <p>Soy Ing de Sistemas egresada de la U.Distrital</p>
      <p>Tuve mi primer trabajo como Software Developer en 2019.</p>
      <p>Actualmente trabajo en JavaScript/Typescript para diferentes clientes</p>
      <p className={classNameP}> Desearia poder asistir a CityJS para seguir alimentando mi conocimiento</p>
      <p className={classNameP}>Soy admiradora de varios speakers y seria un honor poder verlos en vivo</p>
    </div>
  );
};

export default ShortDescription;

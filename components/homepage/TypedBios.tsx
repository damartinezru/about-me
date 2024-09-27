import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          Me apodo como <b className="font-medium">Eladev</b> en el mundo tech.
        </li>
        <li>
          Vivo en <b className="font-medium">Bogota y Medellin, Colombia</b>.
        </li>
        <li>
          Mi primer lenguaje de programacion fue <b className="font-medium">C++</b>.
        </li>
        <li>Amo el desarrollo web</li>
        <li>
          Estoy enfocada en aprender <b className="font-medium">ML y Cloudfront</b>.
        </li>
        <li>
          Trabajo regularmente con <b className="font-medium">Javascript/Typescript</b>.
        </li>
        {/* <li>
          Me gusta el k-pop <Twemoji emoji="microphone" />.
        </li>
        <li>
          Tambien me gusta el deporte. I love
          <span className="ml-1">
            <Twemoji emoji="tennis" />, <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" /> and rap music.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, LoL is my favorite one.
        </li> */}
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;

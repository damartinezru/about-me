import siteMetadata from '@/data/siteMetadata';

import { Twemoji } from '@/components/Twemoji';

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      Soy <span>{siteMetadata.fullName}</span> - <span>Web UI Engineer</span>
      <span className="hidden">Bogota, Col</span>
      {/* <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="viet-nam-vietnam-flag" />
      </span> */}
    </h1>
  );
};

export default Heading;

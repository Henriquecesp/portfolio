import React from 'react';
import { ProjectImage } from './ProjectImage';
import { ProjectText } from './ProjectText';
import Imagem from 'assets/code.png';

export const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="text-gray-100 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <ProjectImage
          image={Imagem}
        />
        <ProjectText
          title='projects.title'
          subtitle='projects.subtitle'
          cta='projects.cta'
        />
      </div>
    </section>
  );
}

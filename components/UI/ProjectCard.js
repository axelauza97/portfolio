import Image from 'next/image';
import Button from './Button';

export const ProjectCard = ({ project }) => {
  return (
    <li className="grid grid-rows-[1fr,min-content,min-content,min-content] items-center gap-1 sm:grid-cols-[1.5fr,1fr] sm:grid-rows-[1fr,min-content,min-content,min-content,1fr] sm:gap-4">
      <Image
        src={project.image}
        alt={`${project.title} ScreenShot`}
        className="row-span-1 h-auto w-full object-cover  sm:col-span-1 sm:row-span-6 sm:h-auto sm:w-full"
      />
      <div className="hidden sm:block"></div>
      <h3 className="pl-2  sm:mt-auto">{project.title}</h3>
      <p className="pl-2 text-sm sm:col-span-1 sm:text-base">{project.description}</p>
      <div className=" sm:row-span- flex w-full justify-between gap-2 p-2 sm:col-span-1">
        {project.source && <Button onClick={() => window.open(project.source)}>Source Code</Button>}
        {project.link && <Button onClick={() => window.open(project.link)}>Visit Page!</Button>}
      </div>
    </li>
  );
};

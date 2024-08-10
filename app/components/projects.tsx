const projects = [
  {
    name: 'statify',
    description: 'a web app that shows stats for spotify',
    link: 'https://statify.nigelloh.com',
  },
  {
    name: 'number neural network',
    description: 'translates binary into decimal',
    link: 'https://github.com/ShigeoDev/NumberNeuralNetwork',
  },
  {
    name: 'mini golf game',
    description: 'co-developed game using java swing',
    link: 'https://github.com/ShigeoDev/MiniGolf',
  },

]
export function Projects() {
  return (
    <div>
      {projects.map((project) => formatProject(project))}
    </div>
  )
}

function formatProject(project: { name: string; link: string; description: string; }) {
  return (
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <a href={project.link} target="_blank">
        <p className="text-neutral-900 dark:text-neutral-100">
          {project.name}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 tracking-tight">
          {String.fromCharCode(8594) + ' ' + project.description}
        </p>
      </a>
    </div>
  )
}

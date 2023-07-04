import { getProjects } from "@/sanity/sanity-utils";

async function Projects() {
  const projects = await getProjects();
  return (
    <div></div>
    // {projects.map((project) => (
    //     <div key={project._id} className="p-2 text-white">
    //       {project.name}
    //     </div>
    //   ))}
  );
}

export default Projects;

import { getProjects } from "@/sanity/sanity-utils"


export default async function Home() {
  const projects = await getProjects()
  return (<div>
    {projects.map(project => (
      <div key={project._id} className="p-2 bg-red-200">
          {project.name}
      </div>
    ))}
  </div>
  )
}

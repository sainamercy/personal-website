import { getProjects } from "@/sanity/sanity-utils"
import NavBar from "./components/NavBar"


export default async function Home() {
  const projects = await getProjects()
  return (
    <>
    <NavBar />
  <div className="h-screen bg-black">
    {projects.map(project => (
      <div key={project._id} className="p-2 text-white">
          {project.name}
      </div>
    ))}
  </div>
  </>
  )
}

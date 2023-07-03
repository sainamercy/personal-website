import { Project } from "@/types/Projects";
import { createClient, groq} from "next-sanity";




export async function getProjects(): Promise<Project[]>{
    const client = createClient({
        projectId: "plt5qdnx",
        dataset: "production",
        apiVersion: "2023-05-31"

    })

    return client.fetch(
        groq`
        *[_type == "project"]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            url,
            content
        }`
    )
}
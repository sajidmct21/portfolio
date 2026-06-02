import SingleProject from "./SingleProject"
import { projectData } from "../data/projectData"

function Project() {
    return (
        <section id="projects" className="container bg-blue-950 pt-5 text-white mx-auto py-12 px-4 text-center">
            <h1 className="text-3xl font-bold pt-10">Recent Projects</h1>
            <p className="mt-5 mx-100">Here are some of the real-world projects I’ve built using the MERN stack.</p>
            <div className="flex flex-wrap gap-10 mt-10 px-10 justify-center">
                {
                    projectData.map((p) => {
                        return (
                            <SingleProject imgUrl={p.imgUrl} title={p.title} description={p.description} techStack={p.techStack} githubUrl={p.githubUrl} liveUrl={p.liveUrl} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project
import { Link } from "react-router-dom"

function SingleProject({ imgUrl, title, description, techStack, githubUrl, liveUrl }: { imgUrl: string, title: string, description: string, techStack: string[], githubUrl: string, liveUrl: string }) {
  return (
    <div className="flex flex-col w-5/12 border-2 border-blue-900">
      <img src={imgUrl} alt="Project 1" className="m-4" />
      <h2 className="text-xl font-semibold mt-4 text-left pl-4">{title}</h2>
      <p className="text-gray-300 mt-4 text-left pl-4">{description}</p>
      <div className="flex gap-2 ml-4 mt-4">
        <button className="border border-blue-900 px-2 py-1 rounded-xl">{techStack[0]}</button>
        <button className="border border-blue-900 px-2 py-1 rounded-xl">{techStack[1]}</button>
        <button className="border border-blue-900 px-2 py-1 rounded-xl">{techStack[2]}</button>
        <button className="border border-blue-900 px-2 py-1 rounded-xl">{techStack[3]}</button>
      </div>
      <div className="flex gap-3 mt-4 px-1 pb-4">
        <Link to={githubUrl}>
          <button className="mx-2 flex gap-1 rounded-2xl items-center px-5 py-2 bg-linear-to-r from-[#1C91FF] to-[#FB3B3E]">
            <span>Github</span>
            <img src="/whiteArrow.svg" alt="Arrow Icon" className="h-4 w-4 text-white" />
          </button>
        </Link>
        <button className="mx-2 flex gap-2 justify-center items-center rounded-2xl px-5 py-2 bg-[#1C91FF]">
          <Link to={liveUrl}>
          <div className="flex gap-2 justify-center items-center">
            <span>Live Demo</span>
            <img src="/whiteArrow.svg" alt="Arrow Icon" className="h-4 w-4 text-white" />
            </div>
          </Link>

        </button>

      </div>
    </div>
  )
}

export default SingleProject
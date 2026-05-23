function Hero() {
  return (
    <div className="bg-blue-950 flex ">
      <div className="w-1/2">
        <img className="py-15 px-10"  src="/hero.png" alt="Hero Image" />
      </div>
      <div className="w-1/2 my-50 text-white">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-3">
          I am a MERN Stack Web Developer focusing on building production-ready applicationsI enjoy designing APIs, creating interactive user interfaces, and optimizing performanceto deliver smooth and efficient user experiences.
        </p>
        <p className="mt-2">
          Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I’m passionate about writing maintainable code, improving UI/UXflows, and building applications that feel fast, secure, and intuitive. I actively explore new tools in the MERN ecosystem to stay updated and keep improving my development workflow.
        </p>
        <button className="flex mt-5 items-center px-5 py-2 gap-2 bg-linear-to-r from-[#1C91FF] to-[#FB3B3E] border-[#1C91FF] rounded-4xl hover:cursor-pointer">
          <span>Download Resume</span>
          <img src="/download.svg" alt="download image" />
        </button>
      </div>
    </div>
  )
}

export default Hero
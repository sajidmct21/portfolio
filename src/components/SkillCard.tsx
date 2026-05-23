
function SkillCard({imageurl,title,description}:{imageurl:string,title:string,description:string}) {
  return (
    <div className="w-1/4 rounded-xl pt-12 bg-blue-950 text-white flex flex-col justify-center items-center border-2 border-[#1C91FF]">
        <img src={imageurl} alt="" className="w-32 h-32 pt-16" />
        <h2 className="mt-6 text-xl font-semibold">{title}</h2>
        <p className="px-6 text-center pb-16 mt-5">{description}</p>
    </div>
  )
}

export default SkillCard
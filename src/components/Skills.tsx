import SkillCard from "./SkillCard"
import { skillData } from "../data/skillCard"



function Skills() {
  return (
    <div className="bg-blue-900 text-white pb-12">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold pt-23">Skills & Technologies</h1>
            <p className="mx-auto w-[33%] text-center pt-4">I work with modern tools and technologies to build fast, scalable and efficient web applications.</p>
        </div>
        <div className="flex flex-wrap mx-10 gap-x-4 gap-y-9 justify-center pt-12">
            {
                skillData.map((item)=>(
                    <SkillCard imageurl={item.imageurl} title={item.skillTitle} description={item.skillDescription}/>
                ))
            }
        </div>
    </div>
  )
}

export default Skills
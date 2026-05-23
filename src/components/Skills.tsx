import SkillCard from "./SkillCard"
import { skillData } from "../data/skillCard"



function Skills() {
  return (
    <div className="bg-blue-900 text-white">
        <div className="flex flex-col justify-center items-center">
            <h1>Skills & Technologies</h1>
            <p className="mx-auto w-[33%] text-center">I work with modern tools and technologies to build fast, scalable and efficient web applications.</p>
        </div>
        <div className="flex flex-wrap mx-10 gap-4 justify-center">
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
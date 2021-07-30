import {skills} from '../skills.json'
import './Skills.css'

const Skills =()=>{

    // console.log(skills)
    return(
        <section className='card container' id='skills'>
            <h2>SKILLS</h2>
            <div id='skills-container'>
                {skills.split(', ').map(e=>{
                    // console.log(e)
                    return <h3 key={`${e}`} className='skill'>{e}</h3>
                })}
            </div>
        </section>
    )
}
export default Skills
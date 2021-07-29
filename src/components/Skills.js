import {skills} from '../skills.json'
import './Skills.css'

const Skills =()=>{

    // console.log(skills)
    return(
        <section className='card container' id='skills'>
            <h2>SKILLS</h2>
            <ul>
                {skills.split(', ').map(e=>{
                    // console.log(e)
                    return <li>{e}</li>
                })}
            </ul>
        </section>
    )
}
export default Skills
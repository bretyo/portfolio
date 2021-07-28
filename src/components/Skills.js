import {skills} from '../skills.json'

const Skills =()=>{

    console.log(skills)
    return(
        <section className='container' id='skills'>
            <h2>SKILLS</h2>
            <ul>
                {skills.split('\n').map(e=>{
                    return <li>{e}</li>
                })}
            </ul>
        </section>
    )
}
export default Skills
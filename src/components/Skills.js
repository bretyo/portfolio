import {skills} from '../skills.json'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Skills.css'
import { useEffect } from 'react';

const Skills =()=>{
    useEffect(()=>{
        AOS.init()
    },[])

    // console.log(skills)
    return(
        <section data-aos='zoom-in' data-aos-anchor-placement="bottom-bottom" className='card container' id='skills'>
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
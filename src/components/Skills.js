import {skills} from '../skills.json'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Skills.css'
import { useEffect } from 'react';

const Skills =()=>{
    // useEffect(()=>{
    //     AOS.init({
    //         anchorPlacement: 'top-center'
    //     });
    // },[])

    // console.log(skills)
    return(
        <section data-aos='zoom-in'  className='card container' id='skills'>
            <h2>SKILLS</h2>
            <p>I am trained in the PERN (PostgreSQL, Express, React, NodeJS) stack.</p>
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
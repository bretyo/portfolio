import AOS from 'aos'
import 'aos/dist/aos.css';
import './About.css'
import devmtn from '../images/devmountain-logo-lockup-blue.png'
import dd from '../images/defenderData.png'
import picocean from '../images/pic-ocean.jpg'
import { useEffect } from 'react'
const About = () => {
    useEffect(()=>{
        AOS.init({
            anchorPlacement: 'top-center'
        });

    },[])
    return (
        <section data-aos='zoom-in'  className='container card' id='about'>
            <h2>ABOUT ME</h2>
            <div  className='abt-pic-txt-container'>
                <img className='abt-pic' src={devmtn} alt='logo for Devmountain' />
                <p className='abt-txt'>After nearly 5 years of working in the food service industry while coding on the side, I decided to pursue my life-long passion for tech! I enrolled in the Full-Time Immersive Web Development program at Devmountain in Lehi, UT, where I acquired the skills to be a Full Stack Web Developer.</p>
            </div>
            <div  className='abt-pic-txt-container'>
                <p className='abt-txt'>After 3 months of rigorous job searching, I found a second home at Justice Works LLC, where I am currently employed. There, I provide solutions in a customized Case Management system called defenderData designed for Public Defenders. Every day, I'm learning something new, and it is gratifying to help attorneys who are notoriously underpaid save time and money.</p>
                <img className='abt-pic' src={dd} alt='the letters dD, one lowercase one uppercase, inside of a grey shield. the logo for defenderData' />
            </div>
            <div  className='abt-pic-txt-container'>
            <img className='abt-pic' src={picocean} alt='bret fernberg sitting on rocks staring out at the sea' />
                <p className='abt-txt'>Every day, I embrace my creative personality both professionally in my code as well as recreationally in music, writing, and Dungeons and Dragons. I also enjoy staring dramatically at the sea.</p>
            </div>
        </section>
    )
}
export default About
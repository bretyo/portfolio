import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Intro.css'
const Intro =()=>{

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <section className='container' id='intro' >
            <img  id='intro-background' src='https://storage.googleapis.com/cool-bucket-wow/background.jpg' />
            <div className='container pic-filter int-back-filt'></div>
            <div data-aos='zoom-in-up' id='profile-wrapper'>
                <img id="profile-pic" src='https://storage.googleapis.com/cool-bucket-wow/profilepic.jpg' alt='Bret Fernberg with a rather dashing haircut, smiling at the sun'/>
                <p className='intro-p'>Hello, my name is</p>
                <h1 id='my-name'>Bret Fernberg</h1> 
                <p className='intro-p'>and I'm a Full Stack Web Developer. It's a pleasure to meet you!</p>
            </div>
        </section>
    )
}
export default Intro;
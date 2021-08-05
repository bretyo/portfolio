import { useState } from 'react';
import './Intro.css'
const Intro =(props)=>{
    const {imgLoaded, setImgLoaded} = props

    return (
        <section className='container' id='intro' >
            <img onLoad={()=>setImgLoaded(true)} id='intro-background' className={`${imgLoaded ? 'show' : 'hide'}`} src='https://storage.googleapis.com/cool-bucket-wow/background.jpg' />
            <div className='container pic-filter int-back-filt'></div>
            <div id='profile-wrapper' className={`${imgLoaded ? 'show' : 'hide'}`}>
                <img id="profile-pic" src='https://storage.googleapis.com/cool-bucket-wow/profilepic.jpg' alt='Bret Fernberg with a rather dashing haircut, smiling at the sun'/>
                <p className='intro-p'>Hello, my name is</p>
                <h1 id='my-name'>Bret Fernberg</h1> 
                <p className='intro-p'>and I'm a Full Stack Web Developer. It's a pleasure to meet you!</p>
            </div>
        </section>
    )
}
export default Intro;
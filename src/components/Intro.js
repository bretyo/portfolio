import './Intro.css'
import background from '../images/background.jpg'
import profilepic from '../images/profilepic.jpg' 
const Intro =(props)=>{
    const {imgLoaded, setImgLoaded} = props

    return (
        <section className='container' id='intro' >
            <img onLoad={()=>setImgLoaded(true)} id='intro-background' className={`${imgLoaded ? 'show' : 'hide'}`} src={background} alt='a gorgeous view of a snow-capped mountain towering next to a large valley'/>
            <div className='container pic-filter int-back-filt'></div>
            <div id='profile-wrapper' className={`${imgLoaded ? 'show' : 'hide'}`}>
                <img id="profile-pic" src={profilepic} alt='Bret Fernberg with a rather dashing haircut, smiling at the sun'/>
                <p className='intro-p'>Hello, my name is</p>
                <h1 id='my-name'>Bret Fernberg</h1> 
                <p className='intro-p'>and I'm a Full Stack Web Developer. It's a pleasure to meet you!</p>
            </div>
        </section>
    )
}
export default Intro;
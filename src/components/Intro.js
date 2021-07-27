
import './Intro.css'
const Intro =(props)=>{
    const {setIntroPos, introPos, scrollPos} = props;

    return (
        <section id='intro' ref={el=>{
            if(!el) return;
            setIntroPos(el.getBoundingClientRect().y)
        }}>
            <div id='profile-wrapper'>
                <img id="profile-pic" src='https://storage.googleapis.com/cool-bucket-wow/profilepic.jpg' alt='Bret Fernberg with a rather dashing haircut, smiling at the sun'/>
                <p id='intro-p'>Hello, my name is <h1 id='my-name'>Bret Fernberg</h1>and I'm a Full Stack Web Developer. It's a pleasure to meet you!</p>
            </div>
        </section>
    )
}
export default Intro;
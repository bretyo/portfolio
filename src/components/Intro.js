
import './Intro.css'
const Intro =(props)=>{
    const {setIntroPos, introPos, scrollPos} = props;

    return (
        <section style={{"opacity":`${1 - scrollPos/250}`}} id='intro' ref={el=>{
            if(!el) return;
            setIntroPos(el.getBoundingClientRect().y)
        }}>
            <img className={`int-back`} id='intro-background' src='https://media-exp1.licdn.com/dms/image/C561BAQGEbvT3SFyR9Q/company-background_10000/0/1582050035728?e=2159024400&v=beta&t=xwPLRsVBBNXQQS3HN3q7hsYXmt6JxJsH6lpnbh9Y1ko' />
            <img id="profile-pic" src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Bret Fernberg with a rather dashing haircut, smiling at the sun'/>
            <h1 >Hello, my name is <span id='my-name'>Bret Fernberg</span>, and I'm a Full Stack Web Developer. It's a pleasure to meet you!</h1>
        </section>
    )
}
export default Intro;
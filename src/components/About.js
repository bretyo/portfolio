import './About.css'
const About = () => {
    return (
        <section className='container card' id='about'>
            <h2>ABOUT ME</h2>
            <div className='abt-pic-txt-container'>
                <img className='abt-pic' src={'https://d.newsweek.com/en/full/1533980/devmountain-logo-lockup-blue.png?w=560&f=71b1cf646452985803eb1b7e185c6b9f'} />
                <p className='abt-txt'>After nearly 5 years of working in the food service industry, I decided to take a chance and join the tech industry! I enrolled in the Full-Time Immersive Web Development program at Devmountain in Lehu, UT, where I learnt the skills required to be a Full Stack Web Developer.</p>
            </div>
            <div className='abt-pic-txt-container'>
                <p className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure cupiditate numquam voluptates perferendis libero maiores officia consectetur minima id tenetur, animi, quae sapiente ipsa vel accusamus, aperiam ut aliquid?</p>
                <img className='abt-pic' src={'https://images.theconversation.com/files/226158/original/file-20180704-73300-quen6i.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip'} />
            </div>
        </section>
    )
}
export default About
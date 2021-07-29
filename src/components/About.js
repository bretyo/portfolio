import './About.css'
const About = () => {
    return (
        <section className='container card' id='about'>
            <h2>ABOUT ME</h2>
            <div className='abt-pic-txt-container'>
                <img className='abt-pic' src={'https://thumbs.dreamstime.com/b/happy-family-summer-vacation-people-having-fun-beach-active-healthy-lifestyle-family-summer-vacation-beach-sea-140887794.jpg'} />
                <p className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure cupiditate numquam voluptates perferendis libero maiores officia consectetur minima id tenetur, animi, quae sapiente ipsa vel accusamus, aperiam ut aliquid?</p>
            </div>
            <div className='abt-pic-txt-container'>
                <p className='abt-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure cupiditate numquam voluptates perferendis libero maiores officia consectetur minima id tenetur, animi, quae sapiente ipsa vel accusamus, aperiam ut aliquid?</p>
                <img className='abt-pic' src={'https://images.theconversation.com/files/226158/original/file-20180704-73300-quen6i.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip'} />
            </div>
        </section>
    )
}
export default About
import './Projects.css'
const Projects =()=>{
    const handleLink=(url)=>{
        window.location.href = url;
    }
    return(
        <section className='card container projects'>
            <h2>PROJECTS</h2>
            <section className='project'>
                <a href='https://bretboxgames.com/'>
                    <h3>Bretbox Games</h3>
                    <aside>click here for link</aside>
                </a>
                <p>A hub for games inspired by Jackbox. One game included: Motivational Poser, a game of my own creation.</p>
                <img  src='https://storage.googleapis.com/cool-bucket-wow/m_poser_screenshot_2.png' alt='Start Menu screen of a game called Motivational Poser in which three players have joined the game, each having an icon of a robot - Terry, a purple robot; Jomama, a brown robot; and Susan, a yellow robot.'/>
            </section>
            <section className='project'>
                <a href='https://warfareboat.com/'>
                    <h3>Warfareboat</h3>
                    <aside>click here for link</aside>
                </a>
                <p></p>
                <img src='https://storage.googleapis.com/cool-bucket-wow/warfare_boat_screenshot.png' alt='Start Menu screen of a game called Motivational Poser in which three players have joined the game, each having an icon of a robot - Terry, a purple robot; Jomama, a brown robot; and Susan, a yellow robot.'/>
                <p></p>
            </section>
        </section>
    )
}
export default Projects
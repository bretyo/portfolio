import './Projects.css'
import m_poser_screenshot_2 from '../images/m_poser_screenshot_2.png'
import warfareboat from '../images/warfare_boat_screenshot.png'
const Projects =()=>{
    
    return(
        <section data-aos='zoom-in' className='card container projects'>
            <h2>PROJECTS</h2>
            <section className='project'>
                <a href='https://github.com/bretyo/personal-project'>
                    <h3>Bretbox Games</h3>
                    <aside>click here for github link</aside>
                </a>
                <p>A hub for games inspired by Jackbox with one game included: Motivational Poser, a game of my own creation. Play with your friends/family and see who can create the most "inspiring" caption over randomly selected images from Unsplash. Create an account to keep track of plays, wins, losses, and high scores!</p>
                <img  src={m_poser_screenshot_2} alt='Start Menu screen of a game called Motivational Poser in which three players have joined the game, each having an icon of a robot - Terry, a purple robot; Jomama, a brown robot; and Susan, a yellow robot.'/>
            </section>
            <section className='project'>
                <a href='https://github.com/WLR1-Battleship/Battleship'>
                    <h3>Warfareboat</h3>
                    <aside>click here for github link</aside>
                </a>
                <p>A site for playing the game Battleship online with a friend or alone against a bot. Includes asynchronous playability, replays of completed games, and 3 difficulty settings for the bot. Made with a team of 4 utilizing Agile practices.</p>
                <img src={warfareboat} alt='Top left: grid with an ocean background and various ships placed on it, three sunk, one on fire, and one untouched. Bottom-left: a box labeled "chat" with the player and the bot responding to each hit. Right side of screen: a grid that resembles a radar with white and red dots resembling hits and misses.'/>
            </section>
        </section>
    )
}
export default Projects
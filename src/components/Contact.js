import './Contact.css'
const Contact =()=>{
    return(
        <section className='card container' id='contact-links'>
            <h2>CONTACT ME</h2>
            <h3 className='contact-name'>LinkedIn: <a className='contact' href='https://www.linkedin.com/in/bret-fernberg'>https://www.linkedin.com/in/bret-fernberg</a></h3>
            <h3 className='contact-name'>Github: <a className='contact' href='https://github.com/bretyo'>https://github.com/bretyo</a></h3>
            <h3 className='contact-name'>Email: <span className='contact'>bret.fernberg@gmail.com</span></h3>
            <h3 className='contact-name'>Phone Number: <span className='contact'>801-930-0218</span></h3>
        </section>
    )
}
export default Contact
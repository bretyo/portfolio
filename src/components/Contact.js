import './Contact.css'
const Contact =()=>{
    return(
        <section data-aos='zoom-in' data-aos-anchor-placement='center-bottom' className='card container' id='contact-links'>
            <h2>CONTACT ME</h2>
            <h3 className='contact'><span className='contact-title'>LinkedIn: </span><a className='contact-info' href='https://www.linkedin.com/in/bret-fernberg'>https://www.linkedin.com/in/bret-fernberg</a></h3>
            <h3 className='contact'><span className='contact-title'>Github: </span><a className='contact-info' href='https://github.com/bretyo'>https://github.com/bretyo</a></h3>
            <h3 className='contact'><span className='contact-title'>Email: </span><span className='contact-info'>bret.fernberg@gmail.com</span></h3>
            <h3 className='contact'><span className='contact-title'>Phone Number: </span><span className='contact-info'>801-930-0218</span></h3>
        </section>
    )
}
export default Contact
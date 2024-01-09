import './home.css'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPlay, FaTwitter} from 'react-icons/fa'
import spierImage from '../../assets/siva porfolio.png'
const Home = () =>{
    return(
        <div className="container home">
            <section className='hero-section' id="home">
                <div className="hero-section__left">
                <div className="hero-section__specila-text">
                    Hello, I am <br /> Siva Krishna
                </div>
                <div className='hero-section__paragraph'>
                    <h1>Full Stack Developer specialised in HTML, CSS, JavaScript, Bootstrap, React js, Python, Redux, Mongoose, Express js, Node js, Django, PostgreSql, MySQl. </h1>
                </div>
                <a href='' download='sivakrishna_resume.pdf' className='button' >Get Resume</a>
                <div className="video-link">
                    <div className="link">
                        <a href='' ><FaPlay /></a>
                    </div>
                    <span>video Link</span>
                </div>
                </div>
                <div className="hero-section__right">
                    <div className="hero-section__image">
                        <img src={spierImage} alt="hero image" />
                        <div className="hero-section__image-half-round-shape"></div>
                            <div className="social-links">
                                <a href='' className='spin'>
                                    <FaFacebookF />
                                </a>
                                <a href='' className='spin'>
                                    <FaTwitter />
                                </a>
                                <a href='' className='spin'>
                                    <FaLinkedinIn />
                                </a>
                                <a href='' className='spin'>
                                    <FaInstagram />
                                </a>
                            </div>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Home
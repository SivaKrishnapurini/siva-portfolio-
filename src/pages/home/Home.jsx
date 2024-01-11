import './home.css'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPlay, FaTwitter} from 'react-icons/fa'
import spierImage from '../../assets/siva porfolio.png'
import Data from '../../utils/Data'
import Card from '../../components/card/Card'
import { useEffect, useRef } from 'react'
const Home = () =>{
    const skillRef = useRef(null);

    useEffect(() => {
        const animateProgressbar = () => {
            const progressBars = document.querySelectorAll('.skill__progress-line');
            progressBars.forEach((progressBar) => {
                const percent = progressBar.getAttribute('data-width');
                progressBar.style.width = `${percent}%`;
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProgressbar();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            observer.disconnect(); // Cleanup on unmount
        };
    }, []);

    return(
        <div className="container home">
            <section className='hero-section' id="home">
                <div className="hero-section__left">
                <div className="hero-section__specila-text">
                    Hello, I am <br /> Siva Krishna
                </div>
                <div className='hero-section__paragraph'>
                    <h1>Full Stack Developer specialised in HTML, CSS, JavaScript, Bootstrap, React js, Python, Redux, MongoDB, Express js, Node js, Django, PostgreSql, MySQl. </h1>
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
                        <img src='https://pujacraft.com/cdn/shop/articles/Krishna-Janmashtami--2023-date1_64f79e1e5e4f8.jpg?v=1693982466' alt="hero image" />
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

            <section className='services' id='services'>
                <h3 className='section__label'>My Services</h3>
                <h2 className='section__title'>
                    Services Provided to clients.
                </h2>
                <div className='cards'>
                {Data.length > 0 && Data.map((data) => (
                    <Card key={data.id} datas={data} />
                ))}
                </div>
                </section>

                <section className="skill" id="skills"> 
                    <div className='skill__left'>
                        <div className="section__label">My Skills</div>
                        <div className="section__title">My Specials skills are</div>
                        <a href='' download={'resume.pdf'} className='button getresumebutton'>Get Resume</a>
                    </div>
                    <div className='skill__right'>
                        <div className="skill__wrapper">
                            <div className="skill__tag">Development</div>
                                <div className="skill__box">
                                    <div ref={skillRef} className="skill__progress-line" data-width='85'></div>
                                        <div className="skill__percentage">85%</div>
                                    
                            </div>
                        </div>
                        <div className="skill__wrapper">
                            <div className="skill__tag">Design</div>
                                <div className="skill__box">
                                    <div ref={skillRef} className="skill__progress-line" data-width='75'></div>
                                        <div className="skill__percentage">75%</div>
                            </div>
                        </div>
                        <div className="skill__wrapper">
                            <div className="skill__tag">Cloud</div>
                                <div className="skill__box">
                                    <div ref={skillRef} className="skill__progress-line" data-width='95'></div>
                                    <div className="skill__percentage">95%</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio" id="portfolio">
                    <h3 className="section__label">My Portfolio</h3>
                    <h2 className="section__title">My Complete Projects</h2>

                    <div className="portfolio__grid">
                        <div className="portfolio__card">
                            <img src='https://i.pinimg.com/736x/fe/01/d3/fe01d39cdda7f6ce4e2ad45b19047d11.jpg' alt='portfolio 1' />
                            <div className="portfolio__card-title">
                                Portfolio 2
                            </div>
                        </div>
                        <div className="portfolio__card">
                            <img src='https://i.pinimg.com/736x/fe/01/d3/fe01d39cdda7f6ce4e2ad45b19047d11.jpg' alt='portfolio 2' />
                            <div className="portfolio__card-title">
                                Portfolio 3
                            </div>
                        </div>
                        <div className="portfolio__card">
                            <img src='https://i.pinimg.com/736x/fe/01/d3/fe01d39cdda7f6ce4e2ad45b19047d11.jpg' alt='portfolio 3' />
                            <div className="portfolio__card-title">
                                Portfolio 4
                            </div>
                        </div>
                        <div className="portfolio__card">
                            <img src='https://i.pinimg.com/736x/fe/01/d3/fe01d39cdda7f6ce4e2ad45b19047d11.jpg' alt='portfolio 4' />
                            <div className="portfolio__card-title">
                                Portfolio 5
                            </div>
                        </div>
                        <div className="portfolio__card">
                            <img src='https://i.pinimg.com/736x/fe/01/d3/fe01d39cdda7f6ce4e2ad45b19047d11.jpg' alt='portfolio 5' />
                            <div className="portfolio__card-title">
                                Portfolio 6
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Home
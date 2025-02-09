import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from '../assets/bgimg.jpg'
function About() {
    return (
        <section id='about' className='bg-dark text-light py-5' >
            <Container>
                <Row flex-column-reverse flex-md-row row>
                    <Col col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center>
                        <img className='img-fluid w-75 shadow' src={AboutImg} alt="about img" />
                    </Col>
                    <Col col-md-6 d-flex flex-column justify-content-center>
                        <h2 className='mb-5'>ABOUT ME</h2>
                        <p className='text-start'> Iam a passionate and versatile Full Stack Developer with expertise in both front-end and back-end technologies. With a solid foundation in building dynamic and scalable web applications, I specialize in designing and developing seamless user experiences while ensuring robust and efficient server-side solutions.</p>
                        <p className='text-start mb-5'>On the front end, I work with modern frameworks like React and Vue.js to create responsive, user-friendly interfaces. On the back end, I am proficient in Node.js, Express, and Django, leveraging these tools to build secure, high-performance APIs and web services. I also have experience with databases like MongoDB, MySQL, and PostgreSQL, allowing me to design efficient data structures and ensure data integrity.
                                                I'm passionate about clean, maintainable code and always look for ways to optimize and improve the user experience. I enjoy collaborating with cross-functional teams, adapting to new challenges, and continuously learning the latest technologies to stay ahead in the fast-evolving world of web development.</p>
                        
                  </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;








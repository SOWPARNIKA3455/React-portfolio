import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className='bg-warning text-dark py-3 text-center'>
            <Container>
                <ul className='list-unstyled d-flex flex-column flex-sm-row justify-content-center'>
                    <li>
                        <a href="#home" className='text-light text-decoration-none'>Home</a>
                    </li>
                    <li className='mx-0 mx-sm-3 my-2 my-sm-0'>
                        <a href="#about" className='text-light text-decoration-none'>About</a>
                    </li>
                    <li className='me-0 me-sm-3 mb-2 md-sm-0'>
                        <a href="#skills" className='text-light text-decoration-none'>Skills</a>
                    </li>
                    <li className='me-0 me-sm-3 mb-2 md-sm-0'>
                        <a href="#projects" className='text-light text-decoration-none'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='text-light text-decoration-none'>Contact</a>
                    </li>
                </ul>
                <hr className='w-50 mx-auto'/>
                <p className='mb-0 '>
                
                Copyright © 2025 Sowparnika M . All rights reserved.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;
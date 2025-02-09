import React from 'react';
import ProjectsItems from '../assets/ProjectsItems';
import ProjectCard from './ProjectCard';
import { Container } from 'react-bootstrap';

function Projects() {
    return (
        <div className='py-5' id='projects'>
            <Container>
                <h2 className='mb-5 text-center'>PROJECTS</h2>
                <div className='row g-4'>
                    {
                        ProjectsItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription} />)
                    }
                </div>
            
        </Container>
        </div>
    )
}

export default Projects;
          
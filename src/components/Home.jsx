import React from 'react';



function Home() {
    return (
        <section className='pt-5' id='home'>
            <div className='container py-md-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0'>
                        <h3 className='text-secondary fw-bold lh-1 fs-1'>I'm SOWPARNIKA M</h3>
                        <h1 className='text-capitalize text-start text-warning lh-1 mb-5 fs-1'>
                            Full Stack <br /> Web Developer
                        </h1>
                        
                       
                    </div>
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                        <img className='img-fluid w-75 rounded-circle shadow my-5' src= "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" 
                        alt="header img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
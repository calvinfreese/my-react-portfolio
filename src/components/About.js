import React from 'react';

function About() {
    return (
        <section className="section is-tall-container">
            <div className="container">
                <div className="columns about-container-bg">
                    <div className="column">
                        <h1 className="title notification is-info"> About Me</h1>
                        <div className="columns is-mobile is-centered">
                                <div className="column">
                                    <img className="profile-img" src={window.location.origin + '/Assets/Images/Photo_of_Me.jpg'} alt="my face" />
                                
                                
                                
                                <h3 className="subtitle">Full Stack Web Developer, cat dad, and video game fanatic.</h3>
                                
                                    <p className="about-p">Dedicated Full Stack Web Developer intent on providing thorough and creative solutions while using empathy, problem-solving, and leadership skills refined by years of working in the IT space supporting customers in retail, corporate, and distribution environments. Web development certificate achieved through University of Minnesota College of Continuing and Professional Studies, St. Paul, MN. Aim to deliver responsive websites, catered to the functional requirements of the client without sacrificing design by utilizing my skills in React, Express, and Node.</p><p className="about-p"> In my free time, I can be found buried beneath a pile of sci-fi/fantasy novels, jamming on my guitar, exploring the vast world of Hyrule, or amongst the crowd at a local music venue.  </p> 
                                </div>
                        </div>
                    </div>
                    <div className="column">
                        <h1 className="title notification is-warning">Contact Me</h1>
                        <div className="columns is-mobile">
                            <div className="column">
                                <ul className="block-list has-radius is-dark is-outlined is-medium is-centered">
                                    <li><i class="fa fa-phone-square"></i><span> Phone Number:</span> 
                                        <a href="tel:7638439369"> (763) 843-9369</a>
                                    </li>

                                    <li><i class="fa fa-envelope-square"></i><span> Email Address:</span>
                                        <a href="mailto: calvin.freese@hotmail.com"> calvin.freese@hotmail.com</a>
                                    </li>

                                    <li><i class="fa fa-file"></i><span> PDF Resume: </span> 
                                        <a href="./Assets/Resume/CF-Resume-2020.pdf" rel="noreferrer" target="_blank"> Open</a>
                                    </li>

                                    <li><i class="fa fa-github-square"></i><span> GitHub:</span>
                                        <a href="https://github.com/whackingMUFN" rel="noreferrer" target="_blank"> whackingMUFN</a>
                                    </li>
                                    <li><i class="fa fa-linkedin"></i> <span> LinkedIn:</span> 
                                        <a href="https://www.linkedin.com/in/calvin-freese-68376a121/" rel="noreferrer" target="_blank"> Calvin Freese</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;
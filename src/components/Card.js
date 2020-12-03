
import React from 'react';

function Card({i, image, title, description, repo, live_site, technologies}) {
    let a_live_site;
    if(live_site){
        a_live_site = <a href={live_site} rel="noreferrer" target="_blank" className="card-footer-item">Live Site</a>
    } else {
        a_live_site = '';
    }
    return (
        
                <div key={i} className="card">
                    <div className="card-image">
                        <figure className="image is-2by1">
                        <img src={image} className="card-img-top" alt={title} />
                        </figure>
                    </div>
                
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-centered notification is-warning">{title}</p>
                        </div>
                        <div className="content pt-2">
                            <p>{description}</p> 
                            <ul>
                                {
                                    technologies.map((tech, index) =>{
                                        return <li className="tech-li" key={index}>{tech}</li>
                                    })
                                }    
                            </ul>                                   
                        </div>
                        <footer className="card-footer">
                            <a href={repo} rel="noreferrer" target="_blank" className="card-footer-item">Github Repository</a>
                            {a_live_site}
                        </footer>
                    </div>
                </div>
           
      
        
    )
}

export default Card;
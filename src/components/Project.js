import React, { useContext } from 'react';
import {PortfolioContext} from "../utils/PortfolioContext";



function Projects() {
    const items = useContext(PortfolioContext)
    console.log(items)
    return (
        <div className="container ">
            <div className="level"></div>
            <div className="columns is-multiline is-centered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd">
            {   
                items.map((prop, index)=> {
                    console.log(prop)
                    if (!prop.live_site) {
                    return ( 
                        <div className="column is-4">
                            <div key={index} className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2">
                                    <img src={window.location.origin + prop.image} className="card-img-top" alt={prop.title} />
                                    </figure>
                                </div>
                            
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-centered notification is-warning">{prop.title}</p>
                                    </div>
                                    <div className="content pt-2">
                                        <p>{prop.description}</p>                                    
                                    </div>
                                    <footer className="card-footer">
                                        <a href={prop.repo} rel="noreferrer" target="_blank" className="card-footer-item">Github Repository</a>
                                    </footer>
                                </div>
                            </div>
                       </div>
                    )
                    } else {
                        return (
                       <div className="column is-4">
                            <div key={index} className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2">
                                    <img src={window.location.origin + prop.image} className="card-img-top" alt={prop.title} />
                                    </figure>
                                </div>
                            
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-centered notification is-warning">{prop.title}</p>
                                    </div>
                                    <div className="content pt-2">
                                        <p>{prop.description}</p>                                    
                                    </div>
                                    <footer className="card-footer">
                                        <a href={prop.repo} rel="noreferrer" target="_blank" className="card-footer-item">Github Repository</a>
                                        <a href={prop.live_site} rel="noreferrer" target="_blank" className="card-footer-item">Live Site</a>
                                    </footer>
                                </div>
                            </div>
                       </div>
                        )
                    }
            
                }) 
        
            }
            </div>
            <div className="level"></div>
        </div>
    )
}

export default Projects;
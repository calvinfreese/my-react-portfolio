import React, { useContext } from 'react';
import {PortfolioContext} from "../utils/PortfolioContext";

import Card from './Card';



function Projects() {
    const items = useContext(PortfolioContext)
    console.log(items)
    return (
        <div className="container">
            <div className="level"></div>
            <div className="columns is-multiline is-centered is-mobile">
           
           
            <PortfolioContext.Provider value={items}>
                { items.map((item, i) => {
                    return (
                    <div className="column is-6">
                            {item.live_site  
                            ?<Card 
                            key={i} 
                            image={item.image}  
                            title={item.title} 
                            description={item.description} 
                            repo={item.repo} 
                            live_site={item.live_site} 
                            technologies={item.technologies}
                            />
                            :
                            <Card 
                            key={i} 
                            image={item.image} 
                            title={item.title} 
                            description={item.description} 
                            repo={item.repo}
                            technologies={item.technologies}
                            />
                            }
                    </div>)
                })
            }
                
            </PortfolioContext.Provider>
            
            </div>
            <div className="level"></div>
        </div>
    )
}

export default Projects;
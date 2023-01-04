import React from 'react';
import info from '../assets/info.json';

const Portafolio = () => {
    return (
        <div className='Home'>

            <div className='proyects'>
                <div>
                    <ul className="proyects-container ">
                        {info.proyects.map(proyect => (
                            <li className='proj-imgbx' key={proyect.name}>      
                                <img src={proyect.pick} alt="proyects   " />
                                <div className='proj-txtx cursor-pointer'>
                                    <a href={proyect.url} target="_blank"><h3> {proyect.name}</h3></a> 
                                    <p> {proyect.technologist}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Portafolio;
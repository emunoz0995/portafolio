import React from 'react';
import info from '../assets/info.json';

const skills = () => {
    return (
        <div className='Home'>
            <div className="item-home">
                <div>
                    <ul className="skill-container">
                        {info.skills.map(skill => (
                            <li key={skill.name}>
                                <img src={skill.pick} alt="skill   " />
                                <p> {skill.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="item-home">
                <div className='experience'>
                    <div className="item-experience">
                        <div className='item-exp'>
                            <h3> + de 100 horas </h3>
                            <p>de teoria</p>
                        </div>
                        <div className='icon-exp'>
                            <i className="fa-sharp fa-solid fa-clock"></i>
                        </div>
                    </div>
                    <div className="item-experience">
                        <div className='item-exp'>
                            <h3> + de 180 horas </h3>
                            <p>de practica</p>
                        </div>
                        <div className='icon-exp'>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                    </div>

                </div>

                <div className="item-experience only ">
                    <div className='item-exp'>
                        <h3> + de 7 proyectos </h3>
                        <p>completados</p>
                    </div>
                    <div className='icon-exp'>
                        <i className="fas fa-briefcase"></i>
                    </div>
                </div>
                <div className='contact-movile'>
                    <h3>Contact me</h3>
                    <ul className="contact">
                        {info.contac.map(contact => (
                            <li key={contact.icon}>
                                <a href={contact.url} target="_blank">
                                    <img src={contact.icon} alt="red-social" /></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default skills;
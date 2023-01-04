import React from 'react';
import info from '../assets/info.json';

const About = () => {
    return (
        <div className='Home '>
            <div className="item-home ">
                <div className='user'>
                    <h3>{info.name}</h3>
                    <p>{info.title}</p>
                    <img src={info.pickture} alt="pick-user" />
                </div>
                <div>
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
            <div className="item-home ">
                <h1>Education</h1>
                <ul className="edu-exp">
                    {info.education.map(education => (
                        <li className='edu-img' key={education.title}>
                            <div className='img-edu'>
                                <img src={education.pick} alt="education" />
                            </div>
                            <div className='inf-edu'>
                                <h3>{education.school}</h3>
                                <p><i className={education.icon}></i>{education.title}</p>
                                <p>{education.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="item-home ">
                <h1 className='title-experience'>Experience</h1>
                <ul className="edu-exp">
                    {info.experience.map(experience => (
                        <li className='exp-img' key={experience.title}>
                            <div className='img-exp'>
                                <img src={experience.pick} alt="experience" />
                            </div>
                            <div className='inf-exp'>
                                <h3>{experience.place}</h3>
                                <p><i className={experience.icon}></i>{experience.title}</p>
                                <p>{experience.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default About;
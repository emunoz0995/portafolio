import React from 'react';
import info from '../assets/info.json'

const Home = () => {
    return (
        <div className='Home'>
            <div className="item-home">

                <img src={info.pickture} alt="pick-user" />
                <div className="info-contact">
                    <p><i className="fa-solid fa-envelope"></i> {info.email}</p>
                    <p><i className="fa-solid fa-mobile-screen-button"></i> {info.phone}</p>
                    <p><i className="fa-solid fa-map-location-dot"></i> {info.location}</p>
                </div>
            </div>
            <div className="item-home">
                <h1>Hi I'm  {info.name}</h1>
                <p>{info.description}</p>
                <h3>{info.title}</h3>
                <div className='contact-me'>
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

export default Home;
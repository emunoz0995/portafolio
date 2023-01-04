
import React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import info from '../assets/info.json';


const Contactme = () => {



    return (
        <div className="Home">


            <div className="login-container">

                <Form className='login-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="header-form">
                            <h3> Hello! leave me a message</h3>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div className="inputs">
                            <Form.Control className='input-form' type="email" placeholder="name" />
                            <Form.Control className='input-form' type="email" placeholder="email" />
                        </div>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <FloatingLabel controlId="floatingTextarea2" label="">
                            <Form.Control
                                as="textarea"
                                placeholder="leave your message here"
                                className='input-area'
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button className='button-login' variant="" type="submit">
                            Send
                    </Button>
                    <Form.Group className="other" controlId="formBasicEmail">

                        <div className='item-home'>
                            <h3 className='write'>or write me for</h3>
                            <ul className="contact ">
                                {info.contac.map(contact => (
                                    <li key={contact.icon}>
                                        <a href={contact.url} target="_blank">
                                            <img src={contact.icon} alt="red-social" /></a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Contactme;
import React from 'react';
import './Footer.css';
import img2 from '../images/02.png';
import img3 from '../images/03.png';
import img4 from '../images/04.png';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="row1">
                    <div className="column1">
                        <h2>Explore</h2>
                        <p>Home</p>
                        <p>Questions</p>
                        <p>Articles</p>
                        <p>Tutorials</p>
                    </div>

                    <div className="column1">
                        <h2>Support</h2>
                        <p>FAQs</p>
                        <p>Help</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="column1">
                        <h2>Stay Connected</h2>
                        <img src={img2} alt="facebook" />
                        <img src={img3} alt="X" />
                        <img src={img4} alt="camera" />
                    </div>
                </div>

                <div className="row2">
                    <h2>DEV@Deakin 2022</h2>
                    <div className="column2">
                        <p>privacy Poliscy</p>
                        <p>Terms</p>
                        <p>Code of Conducts</p>
                    </div>
                </div>
            </div>
        </>
    )
}
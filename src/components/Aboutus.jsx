import React from 'react'
import '../App.css'
const Aboutus = () => {
    return (
        <div className='about-us'>
            <div className="picture-section">
                <img src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg" alt="" />
            </div>
            <div className="content-section">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Why Choose Us?</h3>
                <div className="li-list">
                    <div className="list">
                    <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                    </ul>
                </div>

                <div className="list">
                    <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Lorem ipsum dolor</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
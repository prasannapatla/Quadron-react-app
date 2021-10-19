import React from 'react';
import './css/Banner.css'
import video from './images/dronevideo1.mp4'

const Banner = () => {
    return (
        <div>
            <div className="conatiner-fluid banner">
            <div class="videobg">
                    <video className="banner-video" autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <div className="container contents">
                    <div className="banner-sub">Quadron Air</div><br></br>
                    <div className="banner-title">
                        <span>The Ultraportable </span><br></br><span>Drone for the Best Video</span>
                    </div>
                    <div className="banner-desc">
                        <p>The ultraportable Mavic Air features high-end flight performance and functionality for limitless exploration.</p>
                        <a href="#" className="arrow-icon">  
                            <i className="fas fa-chevron-circle-right"></i>
                            <span className="icon-text text-uppercase">Discover</span>
                        </a>             
                    </div>
                    
                </div>
                
                
                
            </div>
            
        </div>
    );
};

export default Banner;
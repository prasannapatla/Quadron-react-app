import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import drone1 from './images/drone6.jpg'
import drone3 from './images/drone3.jpg'
import drone4 from './images/drone8.jpg'
import drone5 from './images/drone7.jpg'
import './css/Banner.css'

const AddService = () => {
    const [hover,setHover] =useState(true)
    return (
        <div className="container">
            <section className="AddService">
                <div className="add-description">Additional Services</div>
                <h4 className="add-title">Special Things</h4>
                <div className="row">
                <div className="col-sm-6 col-lg-4 col-md-12">
                <Card className="card">
                    <Card.Img className="drones" src={drone1}/>
                    <div className="promobox-number">1</div>
                    <div className="promobox-layout"><h4 className="promobox-title">Entertainment</h4></div>
                    <div className="focus-content">
                        <p>Temperate bass trout filefish medaka trout-perch herring; devil ray sleeper dusky grouper sand diver.</p>
                    </div>
                </Card>
                    
                    
                </div>
                <div className="col-sm-6 col-lg-4 col-md-12">
                <div className="card">
                <img className="drones" src={drone3}/>
                <div className="promobox-number">2</div>
                <div className="promobox-layout"><h4 className="promobox-title">Broadcasts</h4></div>
                <div className="focus-content">
                    <p>Temperate bass trout filefish medaka trout-perch herring; devil ray sleeper dusky grouper sand diver.</p>
                </div>
                </div>
               
                   
                </div>  
                <div className="col-sm-6 col-lg-4 col-md-12 add-service-card">
                <div className="card">
                <img className="drones" src={drone5}/>
                <div className="promobox-number">3</div>
                <div className="promobox-layout"><h4 className="promobox-title">Science</h4></div>
                <div className="focus-content">
                    <p>Temperate bass trout filefish medaka trout-perch herring; devil ray sleeper dusky grouper sand diver.</p>
                </div>
                </div>
               
                  
                </div>
                </div>
            </section>
            
        </div>
    );
};

export default AddService;
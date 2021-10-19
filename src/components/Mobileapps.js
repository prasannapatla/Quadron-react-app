import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import inno from './images/innovation.png'
import {Card, NavLink} from "react-bootstrap";
import {Button} from 'react-bootstrap'
import drone1 from './images/drone6.jpg'
import drone3 from './images/drone3.jpg'
import drone4 from './images/drone8.jpg'
import drone5 from './images/drone7.jpg'
import case1 from './images/cases1.jpg'
import case2 from './images/case2.jpg'
import case3 from './images/case3.jpg'
import android from './images/android4.png'
import google from './images/googleplay.png'
import appstore from './images/appstore.png'
import blog1 from './images/blog1.jpg'
import blog2 from './images/blog2.jpg'
import blog3 from './images/blog3.jpg'
import blog4 from './images/blog4.jpg'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import logo6 from './images/logo6.png'
import logo7 from './images/logo7.png'
import logo8 from './images/logo8.png'
import video from './images/blog.mp4'
import './css/Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const MobileApp = () => {
    var settings={
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
                vertical:false
                
              }
            },
            {
              breakpoint: 600,
              settings: "unslick"
            }]
    }
    const renderSlides = () =>
    [1,2,3].map(num =>(num===1 &&
      <div>
        
        <div className="row">
                            <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo2}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo2}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo3}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo4}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo5}/>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo6}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo7}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo8}/>
                                </div>
                            </div>
                           
                            
      </div>||num==2 &&<div className="container"><div className="row">
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo2}/>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo5}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo7}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo1}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo6}/>
                                    
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo3}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo8}/>
                                </div>
                                <div className="col-lg-3 col-sm-6 clientlogo">
                                    <img className="d-block w-100" height="170px" src={logo2}/>
                                </div>
                            </div>
                            </div> 
            

    ));
    
    return (
       <div>
        <div className="container-fluid mobile_main">
            <div className="container mobiles">
                <section className="mobile-app">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img className="mobile-design" src={inno}/>
                        </div>
                        <div className="col-lg-6 col-md-12 mobile-align">
                            <div className="mobile-subtitle"><i className="mobile-line"></i>Mobile Apps</div>
                            <h1 className="mobile-title">Innovations and Breakthroughs</h1>
                            <p className="mobile-desc">Triplefin blenny gibberfish ridgehead stonecat Australian grayling. Glass knifefish Bombay duck Molly Miller Quillfish stargazer collared dogfish silver hake." </p>
                            <p className="mobile-desc">Temperate bass trout filefish medaka trout-perch herring; devil ray sleeper dusky grouper sand diver. Garibaldi giant danio ziege Siamese fighting fish collared dogfish.</p>
                            <p className="mobile-desc">Triplefin blenny gibberfish ridgehead stonecat Australian grayling. Glass knifefish Bombay duck Molly Miller Quillfish stargazer collared dogfish silver hake." </p>
                            <a href="#" className="arrow-icon2">  
                                <i class="fas fa-chevron-circle-right"></i>
                                <span className="icon-text text-uppercase">More</span>
                            </a>
                        </div>
                    </div>
                    
                </section>
                <section className="inner-card">
                        <div className="row">
                        <div className="col-lg-9">
                            <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Mobile Apps</div>
                            <h1 className="inner-mobile-title">Innovations and Breakthroughs</h1>
                        </div>
                        <div className="col-lg-3 getstarted">
                            
                            <a href="#" className="inner-arrow-icon2">  
                                        <i class="fas fa-chevron-circle-right"></i>
                                        <span className="inner-icon-text text-uppercase">Get started</span>
                            </a>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                            <Card className="mobile-apps" style={{ width: 'auto',height:'auto' }}>
                            <Card.Img variant="top" className="inner-image" src={drone4} />
                            <Card.Body>
                                <Card.Title>The ultraportable MaviCopter Air features</Card.Title>
                                <Card.Text>
                                Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring.
                                </Card.Text>
                                <NavLink className="fw-bold">More</NavLink>
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <Card className="mobile-apps" style={{ width: 'auto',height:'auto' }}>
                            <Card.Img variant="top" className="inner-image" src={drone3} />
                            <Card.Body>
                                <Card.Title>Quadrone Announces Pricing and Availability of Multilink</Card.Title>
                                <Card.Text>
                                Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring.
                                </Card.Text>
                                <NavLink className="fw-bold">More</NavLink>
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <Card className="mobile-apps" style={{ width: 'auto',height:'auto' }}>
                            <Card.Img variant="top" className="inner-image" src={drone5} />
                            <Card.Body>
                                <Card.Title>Air features is Ultraportable MaviCopter</Card.Title>
                                <Card.Text>
                                Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring.
                                </Card.Text>
                                <NavLink className="fw-bold">More</NavLink>
                            </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </section>
                
            </div>
            
        </div>
        <div className="container">
                <section className="cases">
                <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={case1}
                    alt="First slide"
                    height="570px"
                />
                <Carousel.Caption>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Cases</div>
                            <h3 className="case-subheading">Vision Based</h3>
                            <h3>Production</h3>
                            {/* <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span class="" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                                <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span class="" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                                <span class="sr-only">Next</span>
                            </a> */}
                        </div>
                        <div className="col-lg-6">
                            <p className="case-desc">Aerial surveying is not just about the aircraft. It’s about total UAV solutions, complete with all the tools geospatial pros need to perform jobs accurately, efficiently, and safely..</p>
                            
                            
                        </div>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={case2}
                    alt="First slide"
                    height="570px"
                />
            
                <Carousel.Caption>
                <div className="row">
                        <div className="col-lg-6">
                <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Cases</div>
                    <h3 className="case-subheading">Vision Based</h3>
                    <h3>Production</h3>
                    {/* <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                    </div>
                    <div className="col-lg-6">
                            <p className="case-desc">Aerial surveying is not just about the aircraft. It’s about total UAV solutions, complete with all the tools geospatial pros need to perform jobs accurately, efficiently, and safely..</p>   
                        </div>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                   className="d-block w-100"
                   src={case3}
                   alt="First slide"
                   height="570px"
                />
            
                <Carousel.Caption>
                <div className="row">
                        <div className="col-lg-6">
                <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Cases</div>
                    <h3 className="case-subheading">Vision Based</h3>
                    <h3>Production</h3>  
                    {/* <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="arrow-icons" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="arrow-icons" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                        <span class="sr-only">Next</span>
                    </a>  */}
                    </div> 
                    <div className="col-lg-6">
                            <p className="case-desc">Aerial surveying is not just about the aircraft. It’s about total UAV solutions, complete with all the tools geospatial pros need to perform jobs accurately, efficiently, and safely..</p>
                            
                            
                    </div>
                    </div>            
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                </section>
            </div>
            <div className="container">
                <section className="android">
                    <div className="row">
                        <div className="col-lg-7">
                            <img src={android} className="android-img"/>
                        </div>
                        <div className="col-lg-5 android-content">
                            <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Cases</div>
                            <h3 className="android-subheading">Innovations and </h3><h3 className="android-subheading"
                            >Breakthroughs</h3>
                            <p className="android-desc">Aerial surveying is not just about the aircraft. It’s about total UAV solutions, complete with all the tools geospatial pros need to perform jobs accurately, efficiently, and safely.</p>
                            <p className="android-desc">Our mdMapper packages integrate high-performance drones with advanced sensors and software. They’re designed for quick learning and easy use, so you can get your UAV services off the ground immediately.</p>
                            <img src={google}/> <img className="m-3" src={appstore}/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="blog">
                <div className="inner-mobile-subtitle"><i className="inner-mobile-line"></i>Blogs</div>
                    <h3 className="blog-subheading">News & Insights</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row blog-space">
                            <div className="col-lg-5">
                                <img className="blogs-img" src={blog1}/>
                                
                            </div>
                            <div className="col-lg-7">
                                <p className="blog-date">Oct 28, 2019</p>
                                <h4 className="blog-title">Quadron Forum Data Review in 2018</h4>
                                <i class="fas fa-comment-alt"> 1</i>
                            </div>
                        </div>
                        <div className="row blog-space">
                            <div className="col-lg-5">
                                <img className="blogs-img" src={blog2}/>
                                
                            </div>
                            <div className="col-lg-7">
                                <p className="blog-date">Aug 08, 2020</p>
                                <h4 className="blog-title">We launch a new Precision Agriculture project</h4>
                                <i class="fas fa-comment-alt"> 2</i>
                            </div>
                        </div>
                        <div className="row blog-space">
                            <div className="col-lg-5">
                                <img className="blogs-img" src={blog3}/>
                                
                            </div>
                            <div className="col-lg-7">
                                <p className="blog-date">Nov 28, 2017</p>
                                <h4 className="blog-title">Quadrone Announces Pricing And Availability of Multilink</h4>
                                <i class="fas fa-comment-alt"> 3</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    
                    <Card className="blog-right-card" style={{ width: 'auto' }}>
                        {/* <Card.Img className="blog-img" height="auto" src={blog4} /> */}
                        <video autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                        </video>
                        
                        <Card.Body>
                            <Card.Title className="blog-dates">19 NOV,1990</Card.Title>
                            <Card.Text className="blog-contents">
                            Artificial inteligence applied to Precision Agriculture
                            </Card.Text>
                            <i class="fas fa-comment-alt"> 3</i>
                        </Card.Body>
                    </Card>
                        
                    </div>
                </div>
                        
                </section>
            </div>
            <div className="container-fluid client-bg">
                <div className="container">
                    <section className="clients">
                    <Slider
                        dots={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        {...settings}
                    >
                    
                        {renderSlides()}
                    </Slider>
                    
                    </section>
                </div>
            </div>
    </div>  
    
       
    );
};

export default MobileApp;
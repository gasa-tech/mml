import React from "react";
import Slider from "../includes/Slider";
import {Link} from "react-router-dom";
import VMC from "./includes/VMC";
import image from "../images/4th.jpg";
function Home(){
    return(
       <div>
           <Slider/>
            <section className="section ">
                <div className="container">
                    <div className="row">
                      <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={image}class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Manticao Molecular Laboratory</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/about" className="btn btn-sm btn-outline-secondary shadow float-end"> Read More</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <VMC />
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-9 text-center">
                            <h1 className="main-heading">Our Services</h1>
                           <div className="row mb-5">
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <img src={image} width={300} height={150} alt="image"/>
                                            <h3>Hilot</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <p path='/'className="text-decoration-underline float-end">>>Read More</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <img src={image}width={300} height={150} alt="image"/>
                                            <h3>limpyo</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <p path='/'className="text-decoration-underline float-end">>>Read More</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <img src={image}width={300} height={150} alt="image"/>
                                            <h3>wala lang</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <p path='/'className="text-decoration-underline float-end">>>Read More</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                      
                    </div>
                </div>
            </section>
       </div>       
    );
}

export default Home;
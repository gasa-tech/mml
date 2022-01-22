import React from "react";

function Footer(){
    return(
        <section className="section bg-dark border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5  className="text-white">Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">About Us</a></li>
                                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Contact Us</a></li>
                                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Services</a></li>
                                <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">FAQs</a></li>
                            </ul>
                        </div>    
                        <div className="col-md-4">
                            <h5 className="text-white">Contact Us</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Poblacion Manticao, Misamis Oriental Philippines</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">mml@gasa.tech.com</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+63 9363901814</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+63 223-6542</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-4 offset-1">
                            <form>
                            <h5 className="text-white">Subscribe to our newsletter</h5>
                            <p className="text-white">Monthly digest of whats new and exciting from us.</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                            </form>
                        </div>   
                    </div>
                    <div class="d-flex justify-content-between py-4 my-4 border-top" >
                        <p className="text-white">© 2022 Gasa.tech - All rights reserved.</p>
                        <ul class="d-flex">
                            <li class="ms-3"><a class="text-white">Twitter</a></li>
                            <li class="ms-3"><a class="text-white">Facebook</a></li>
                            <li class="ms-3"><a class="text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                
            </section>
    );
}
export default Footer;
import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark py-4" >
            <div class="container">
                <Link class="navbar-brand text-white" to="/">MML LOGO</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="/contact">Contac Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 

export default Navbar;
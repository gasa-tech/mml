import React from "react";
import reancirl from "../images/reancirl-fsd.jpg";
import michael from "../images/michael-fe.jpg";
import carlo from "../images/carlo-be.jpg";

function About(){
    return(
		<div>
			<div className="about-section">
				<h1>About Us Page</h1>
				<p>Some text about who we are and what we do.</p>
				<p>Resize the browser window to see that this page is responsive by the way.</p>
			</div>
			<h2 className="h1-center">Our Team</h2>

			<div className="row">
				<div className="col-md-4">
					<div className="card">
					{/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"/> */}
					<img src={michael} className="image-card" alt="image"/>
					<div className="container">
						
						<h2>Michael G. Cuento</h2>
						<p className="title">Front-End Developer</p>
						<p>Talent wins games, but teamwork and intelligence win championships.</p>
						<p>michael@gasatech.com</p>
						<p><button className="button">Contact</button></p>
					</div>
					</div>
				</div>

				<div className="col-md-4">
					<div class="card">
					{/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/> */}
					<img src={reancirl} className="image-card" alt="image"/>
					<div class="container">
						<h2>Reancirl Balaba</h2>
						<p className="title">CEO & FOUNDER</p>
						<p>The best teamwork comes from men who are working independently toward one goal in unison.</p>
						<p>reancirl@gasatech.com</p>
						<p><button className="button">Contact</button></p>
					</div>
					</div>
				</div>
				
				<div className="col-md-4">
					<div className="card">
					{/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"/> */}
					<img src={carlo} className="image-card" alt="image"/>
					<div className="container">
						<h2>Carlo Quiamco</h2>
						<p className="title">Back-End Developer</p>
						<p>Teamwork is the secret that makes common people achieve uncommon results.</p>
						<p>carlo@gasatech.com</p>
						<p><button className="button">Contact</button></p>
					</div>
					</div>
				</div>
			</div>

		</div>
       
		
    );
}

export default About;
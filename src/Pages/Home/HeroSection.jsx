import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from "react-scroll"
export default function HeroSection(){
    return( 
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">
                        Hey I'm Hossam
                    </p>
                    <h1 className="hero-section-title">
                        
                            <span className="hero-section-title-colour">
                                A Sotware Engineering Student
                        </span>
                       
                    
                    </h1>
                        <p className="hero-section-description">
                            <br />                       
                            </p>
                </div>
                

            </div>
            <div className="hero-section-img">
                <img src="./img/hero-img.png" alt="Hero Section" />
            </div>
        </section>
        )
}
 
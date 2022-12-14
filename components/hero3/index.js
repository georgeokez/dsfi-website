import Link from 'next/link'
import { paymentLink } from '../utils/contents';

const Hero3 = () => {

    return(
        <section className="hero hero-style-3">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-12 slide-caption">
                                <div className="slide-title">
                                    <h2>Let’s be Kind for <span>Children</span></h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>High Quality Charity Theme in Envato Market.</p>
                                    <p>You Can Satisfied Yourself By Helping.</p>
                                </div>
                                <div className="btns">
                                    <a className="theme-btn" href={paymentLink} target="_blank">Donate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                    </div>  
                </div>
            </div>
    </section>
    )
}

export default Hero3;
import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'
import Twitter from '../assets/images/twitter.png'
import LinkedIn from '../assets/images/linkedin.svg'

export default function FooterComponent() {

    return (
        <div className="footer bg-dark text-center text-white">
            <div className="container p-4">
                <div id="subscribe">
                    <div className="footer-title">Subscribe to the Newsletter</div>
                    <form action="https://gmail.us4.list-manage.com/subscribe/post?u=1c43ace496ccffe53f6755bf0&amp;id=f0850829d5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <input className="form-control" type="email" name="EMAIL" id="mce-EMAIL" placeholder="E-mail Address" required />
                                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_1c43ace496ccffe53f6755bf0_f0850829d5" tabIndex="-1" value="" readOnly /></div>
                            </div>
                            <div className="col-md-1">
                                <input type="submit" value="Subscribe" />
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <div id="contact">
                    <div className="footer-title">Contact us</div>
                    <div className="footer-text">Please send your message to LSE Law Review Blog. We will reply as soon as possible!</div>
                    <form action="https://formspree.io/lselawreview@gmail.com" method="POST">
                        <div className="row">
                            <div className="col-xl-12 p-1">
                                <textarea rows="8" className="form-control mb-3" name="message" placeholder="Message*" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <input className="form-control" type="text" name="name" placeholder="Name*" required />
                            </div>
                            <div className="col-md-6 p-1">
                                <input className="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required />
                            </div>
                        </div>
                        <input className="col-md-3" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div className="footer-links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lselawreview/"><img src={Facebook} alt="facebook" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lselawreview/"><img src={Twitter} alt="twitter" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lselawreview/"><img src={Instagram} alt="instagram" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/lse-law-review/"><img src={LinkedIn} alt="linkedin" /></a>
            </div>
            <div className="copyright">
                <Link to="/">Copyright</Link> &copy; {new Date().getFullYear()} LSE Law Review Blog. Our <Link style={{ textDecoration: 'underline' }} to="/privacy">privacy policy</Link>.
            </div>
        </div>
    )
}

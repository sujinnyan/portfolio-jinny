import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
    return (
        
            <footer>
                <a href="" className="footer__logo">JINNY</a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Testimonials">Testimonials</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://facebook.com"><FaFacebookF/></a>
                    <a href="https://instagram.com"><GrInstagram/></a>
                    <a href="https://twitter.com"><BsTwitter/></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Sujin Jinny An Portfolio. All rights reserved</small>
                </div>
            </footer>
       
    )
}

export default Footer

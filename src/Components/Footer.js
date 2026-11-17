import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () =>{
    return <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <SlSocialLinkedin/>
                <BsYoutube/>
                <FaFacebook/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                    <span> Quality </span>
                    <span> Help </span>
                    <span> Share </span>
                    <span> Career </span>
                    <span> Testimonial</span>
                    <span> Work </span>
            </div>
            <div className="footer-section-columns">
                <span>798769878798</span>
                <span> hello@gamil.com</span>
                <span> press@gmail.com </span>
                <span> contact@food.com </span>
            </div>
            <div className="footer-section-columns">
                <span> Terms & Conditions </span>
                <span> Privacy Policy </span>
            </div>
        </div>
    </div>;
}

export default Footer
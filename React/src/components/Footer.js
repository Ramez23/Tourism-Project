import React from "react";

export default function Footer(params) {
    return (
        <footer className={params.name}>

            <div className="footer-socials">
                <a href="#" class="social"><i className="fab fa-facebook-f fa-lg" ></i></a>
                <a href="#" class="social"><i class="fa-brands fa-twitter fa-lg"></i></a>
                <a href="#" class="social"><i class="fa-brands fa-instagram fa-lg"></i></a>
                <a href="#" class="social"><i className="fab fa-google-plus-g fa-lg"></i></a>
            </div>

            <div className="footer-nav">
                <ul>
                    <li>About</li>
                    <li>Need Help?</li>
                    <li>Contact Guide</li>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className="footer-title">
                <img src={require('../imgs/image-nT9eQgiX_U-transformed-removebg-preview (1).png')} />
                <h3>MeetThePharaohs.com</h3>
            </div>
        </footer>
    )
}
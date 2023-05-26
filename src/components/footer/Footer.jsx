import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className='row'>
                <div className='footer-col col-4 Info'>
                    <div>
                        <img src='/images/healthcare.png' id='logo' alt=''></img>
                        <p>Healthcare</p>
                    </div>
                    <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                </div>
                <div className='footer-col col-4 contact'>
                    <address> <i class="bi bi-geo-alt"></i> 1123 Street Area Town Zimbabwe </address>
                    <p><i class="bi bi-telephone"></i>+263777777777</p>
                    <div className=' footer-icons-container'>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-whatsapp"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    </div>

                </div>
                <div className='footer-col col-4 link'>
                    <ul>
                        <li><a href="" className="footer-link">Home</a></li>
                        <li><a href="" className="footer-link">About</a></li>
                        <li><a href="" className="footer-link">Find Doctor</a></li>
                        <li><a href="" className="footer-link">Testimonials</a></li>
                        <li><a href="" className="footer-link">Services</a></li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2023</p>
        </footer>
    )
}

export default Footer
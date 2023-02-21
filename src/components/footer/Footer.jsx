import React from 'react'
import footer from '../../assets/new layout/footer.jpg'

import './Footer.css'


function Footer() {
    return (
        // <div className='footer'>
        //     <footer className='resize-max'>
        //         <div class="main-content">

        //             <div class="logo box">
        //                 <div className='content'>
        //                     <img id='vtop-logo' src={vtopLogo} alt="logo" />
        //                 </div>
        //             </div>

        //             <div class="quick-links box">
        //                 <h2>Quick Links</h2>
        //                 <div class="content">
        //                     <ul>
        //                         <li>Home</li>
        //                         <li>About us</li>
        //                         <li>Faq</li>
        //                         <li>Contact us</li>
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div class="our-product box">
        //                 <h2>Our Product</h2>
        //                 <div class="content">
        //                     <ul>
        //                         <li>Li-ion BMS</li>
        //                         <li>Smart Balance</li>
        //                         <li>Battery indicator</li>
        //                         <li>LFP BMS</li>
        //                     </ul>
        //                 </div>
        //             </div>

        //             <div class="contact-us box">
        //                 <h2>Contact Us</h2>
        //                 <div class="content">
        //                     <ul>
        //                         <li id='phone'>Phone: +8618057232978</li>
        //                         <li id='e-mail'>E-mail: barnaiwu@gmail.com</li>
        //                         <li id='address'>Address: Building 3, No. 97, <br />
        //                             Yuehai Real Estate, <br />
        //                             128 Industrial Zone, <br />
        //                             Tangxia Town, Dongguan City, <br />
        //                             CHINA 523710
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>

        //         </div>


        //         <div class="fotter-bottom">
        //             <center>
        //                 <div className="footer-left-bottom">
        //                     <p>Copyright © 2013-2022 Dongguan EVTOP Materials Co,. Ltd. All Rights Reserved.</p>
        //                 </div>

        //                 <div className='footer-right-bottom'>
        //                     <ul>
        //                         <li>Privacy Policy</li>
        //                         <li>Terms & Condition </li>
        //                         <li>Return and Cancellation</li>
        //                     </ul>
        //                 </div>
        //             </center>
        //         </div>
        //     </footer>
        // </div>
        <div className='new-footer'>
            <div className='new-footer-top'>
                <img src={footer} alt="brain" />
                <center>
                    <div className="footer-left-bottom">
                        <p>Copyright © 2013-2022 Dongguan EVTOP Materials Co.Ltd. All Rights Reserved.</p>
                    </div>
                    <div className='footer-right-bottom'>
                        <ul>
                            <li>Privacy Policy &&</li>
                            <li>Terms and Condition  &&</li>
                            <li>Return and Cancellation</li>
                        </ul>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Footer
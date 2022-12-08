import React from 'react'
import Weibu from '../../assets/new layout/Weibu05.jpg'
import code from '../../assets/new layout/code.png'
// import logo from '../../assets/new layout/logoint.png'
import './Footer.css'
import { InstagramLogo, LinkedinLogo, TelegramLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react'


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
                <img src={Weibu} alt="brain" />
                <div className='footer-code'>
                    <img src={code} alt="code" className='code' />
                    <p className='text-jelly'>WeChat(jelly)</p>
                </div>
                <div className='footer-text'>
                    <p className='footer-text-info'>Address: 128 Industrial Zone, Tangxia Town, Dongguan 523710,China.</p>
                    <p className='footer-text-info'>MOB/Whatsapp: 86-1805723297(Jelly)</p>
                    <p className='footer-text-info'>TEL: 400-69170001</p>
                    <p className='footer-text-info'>Email 1: contact@evtop.org</p>
                    <p className='footer-text-info'>Email 2: 254610608@qq.com</p>
                </div>
                <div className="footer-links">
                    <TwitterLogo size={42} color="#3a25d4" weight="fill" />
                    <LinkedinLogo size={42} color="#3a25d4" weight="fill" />
                    <WhatsappLogo size={42} color="#3a25d4" weight="fill" />
                    <TelegramLogo size={42} color="#3a25d4" weight="fill" />
                    <InstagramLogo size={42} color="#f70868" />

                </div>
            </div>
            <div className="fotter-bottom" >
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
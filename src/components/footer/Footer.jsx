import React from 'react'
import "./footer.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import logo from "../../assets/logo.png"
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={5}>
                <div class="footer_hd_left">
                        <div class="footer_img">
                            <img src={logo} alt="" />
                        </div>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                    </div>
                    <div class="footer_inner">
                        <h5>Email me at  <span>Call us</span></h5>
                        <div class="footer_inner1">
                            <p>contact@website.com  <span>0927 6277 28525</span></p>
                        </div>
                    </div>
                </Col>

                <Col lg={{span:5, offset:1}}>
                <div class="footer_hd_right">
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div class="footer_icon">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <section id='footer2'>
            <Container>
                <Row>
                    <Col lg={6}>
                    <div class="footer2_left">
                        <p>Copyright 2022, Finsweet.com</p>
                    </div>
                    </Col>

                    <Col lg={{span:5, offset:1}}>
                    <div class="footer2_right">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Case</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
            </section>
    </footer>


  )
}

export default Footer
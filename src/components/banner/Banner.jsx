import React from 'react'
import "./banner.css"
import banner from "../../assets/banner.png"
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
    <section id="banner">
        <Container>
            <Row>
                <Col lg={6}>
                <div className="banner_left">
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className="banner_button">
                            <a href="#">View our work</a>
                            <a href="#">View Pricing    <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </Col>

                <Col lg={6}>
                <div className="col-lg-6">
                    <div className="banner_right">
                        <img src={banner} alt="" />
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Banner
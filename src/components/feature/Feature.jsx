import React from 'react'
import "./feature.css"
import { Col, Container, Row } from 'react-bootstrap'
import feature1 from "../../assets/feature1.png"
import feature2 from "../../assets/feature2.png"
import feature3 from "../../assets/feature3.png"
import feature4 from "../../assets/feature4.png"
import feature5 from "../../assets/feature5.png"
import feature6 from "../../assets/feature6.png"

export const Feature = () => {
  return (
    <section id="feature">
        <Container>
            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={6}>
                <div className="feature_head  text-center">
                    <h6>Features</h6>
                </div>
                </Col>
                </div>
            </Row>

            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={5}>
                     <div className="feature_head text-center">
                        <h2>Design that solves</h2>
                    </div>
                </Col>
                </div>
            </Row>

            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={6}>
                <div className="feature_head feature_padd text-center">
                        <h2>problems, one product at a time</h2>
                    </div>
                </Col>
                </div>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature1} alt="" /></div>
                        <h4>Uses Client First</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature2} alt="" /></div>
                        <h4>Two Free Revision Round</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature3} alt="" /></div>
                        <h4>Template Customization</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature4} alt="" /></div>
                        <h4>24/7 Support</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature5} alt="" /></div>
                        <h4>Quick Delivery</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
                <Col lg={4}>
                <div className="feature_item">
                        <div className="feature_item_img"><img src={feature6} alt="" /></div>
                        <h4>Hands-on approach</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

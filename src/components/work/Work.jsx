import React from 'react'
import "./work.css"
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io";
import pointer1 from "../../assets/pointer1.png"
import pointer2 from "../../assets/pointer2.png"
import pointer3 from "../../assets/pointer3.png"
import pointer4 from "../../assets/pointer4.png"

const Work = () => {
  return (
    <section id="work">
        <Container>
            <Row>
                <Col log={4}>
                <div className="work_left">
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href="#">Get in touch with us    <i><IoIosArrowRoundForward /></i></a>
                    </div>
                </Col>

                <Col lg={{span:6, offset:1}}>
                    <Row>
                        <Col lg={6}>
                        <div className="work_item">
                                <div className="work_itm_img"><img src={pointer1} alt="" /></div>
                                <h4>Strategy</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="work_item">
                                <div class="work_itm_img"><img src={pointer2} alt="" /></div>
                                <h4>Wireframing</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="work_item">
                                <div className="work_itm_img"><img src={pointer3} alt="" /></div>
                                <h4>Design</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="work_item">
                                <div className="work_itm_img"><img src={pointer4} alt="" /></div>
                                <h4>Development</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work
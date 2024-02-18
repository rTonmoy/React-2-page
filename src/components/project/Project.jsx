import React from 'react'
import "./project.css"
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io";
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

const Project = () => {
  return (
    <section id="project">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="project_head">
                        <h2>View our projects</h2>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="project_head text-end">
                        <h5>View More <i><IoIosArrowRoundForward /></i></h5>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={8}>
                <div className="project_btm_left">
                            <img src={project1} className='w-100' alt="" />
                            <div className="project_over1">

                            </div>
                            <div className="project_btm_text1">
                                <h2>Workhub office Webflow Webflow Design</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                                <a href="#">View project <i><IoIosArrowRoundForward /></i></a>
                            </div>
                        </div>
                </Col>
                <Col lg={4}>
                    <Row>
                        <Col lg={12}>
                        <div className="project_btm_right">
                                    <img src={project2} className='w-100' alt="" />
                                    <div className="project_over2">
        
                                    </div>
                                    <div className="project_btm_text2">
                                        <h2>Unisaas Website Design</h2>
                                        <a href="#">View project <i><IoIosArrowRoundForward /></i></a>
                                    </div>
                                </div>
                        </Col>
                        <Col lg={12}>
                        <div className="project_btm_right2">
                                    <img src={project3} className='w-100' alt="" />
                                    <div className="project_over2">
        
                                    </div>
                                    <div className="project_btm_text2">
                                        <h2>Unisaas Website Design</h2>
                                        <a href="#">View project <i><IoIosArrowRoundForward /></i></a>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>

  )
}

export default Project
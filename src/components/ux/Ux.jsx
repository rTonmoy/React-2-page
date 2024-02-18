import React from 'react'
import "./ux.css"
import blog1 from "../../assets/blogg1.png"
import { Col, Container,Row } from 'react-bootstrap'

const Ux = () => {
  return (
    <>
    <section id="ux">
        <Container>
            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={8}>
                    <div className="ux_text text-center">
                        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <p>Andrew Jonson Posted on 27th January 2021</p>
                    </div>
                </Col>
            </div>
            </Row>

            <Row>
                <Col lg={12}>
                <div className="ux_img">
                        <img src={blog1} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>

            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={8}>
                   <div className="ux_txt_btm text-center">
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <a href="#">Read more</a>
                    </div>
                </Col>
            </div>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ux
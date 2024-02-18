import React from 'react'
import "./blog.css"
import blog2 from "../../assets/blogg2.png"
import blog3 from "../../assets/blogg3.png"
import blog4 from "../../assets/blogg4.png"
import blog5 from "../../assets/blogg5.png"
import blog6 from "../../assets/blogg6.png"
import blog7 from "../../assets/blogg7.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import { Col, Container, Row } from 'react-bootstrap'

const Blogg = () => {
  return (
    <section id='blog'>
        <Container>
            <Row>
            <div className='d-flex justify-content-center'>
                <Col lg={3}>
                    <div className="blog_top text-center">
                        <h3>Our Blog</h3>
                    </div>
                </Col>
            </div>
            </Row>

            <Row>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog2} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog3} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog4} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog5} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog6} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="blog_item">
                        <div className="blog_img"><img src={blog7} className='w-100' alt="" /></div>
                        <h6>27 Jan 2021</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a href="#">Read More <span><i><IoIosArrowRoundForward /></i></span></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blogg
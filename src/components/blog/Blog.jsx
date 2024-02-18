import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io";
import "./blog.css"
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"

const Blog = () => {
  return (
    <section id="blog">
        <Container>
            <Row>
                <Col lg={12}>
                <div className="blog_head">
                        <h2>Our blog</h2>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="blog_btm">
                        <img src={blog1} className='w-100' alt="" />
                        <h6>19 Jan 2022</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>Read More  <i><IoIosArrowRoundForward /></i></h5>
                    </div>
                </Col>
                <Col lg={4}>
                <div className="blog_btm">
                        <img src={blog2} className='w-100' alt="" />
                        <h6>19 Jan 2022</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>Read More  <i><IoIosArrowRoundForward /></i></h5>
                    </div>
                </Col>
                <Col lg={4}>
                <div className="blog_btm">
                        <img src={blog3} className='w-100' alt="" />
                        <h6>19 Jan 2022</h6>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <h5>Read More  <i><IoIosArrowRoundForward /></i></h5>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog
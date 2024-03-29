import React from 'react'
import { Col, Row } from "antd";

const items = [
    {
        key:"1",
        icon: <i className="fas fa-search-location"></i>,
        title: "Simplified Search",
        content: "It is a long established fact that a reader will be distractec by the readable content.",
    },
    {
        key:"2",
        icon: <i className="fas fa-database"></i>,
        title: "Lots of Properties",
        content: "It is a long established fact that a reader will be distractec by the readable content.",
    },
    {
        key:"3",
        icon: <i className="fas fa-globe-africa"></i>,
        title: "Proudly African",
        content: "It is a long established fact that a reader will be distractec by the readable content.",
    },
];

function About() {
  return (
    <div id='about' className='block about-section'>
        <div className="fluid-container">
            <div className="title-section">
                <h2>About Us</h2>
                <p>You will find us very interesting!</p>
            </div>
            <div className="content-section">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi dolore repudiandae, perferendis error dolorum animi, accusantium, numquam cumque aut dolorem rem. Debitis veritatis mollitia iste sapiente consectetur laudantium nostrum.</p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map((item)=>{
                    return(
                        <Col md={{span:8}} key={item.key}>
                            <div className="content">
                                <div className="icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>

    </div>
  )
}

export default About
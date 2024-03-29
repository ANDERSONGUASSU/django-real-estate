import React from 'react'
import { SearchOutlined } from "@ant-design/icons";
import { Button, Carousel } from 'antd';

const items = [
    {
        key: "1",
        title: "Buy or sell properties",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nesciunt molestias dignissimos. Ea eius nulla sequi? Rerum, voluptates necessitatibus reiciendis voluptatem aspernatur laboriosam aut quae unde laudantium! Inventore, consectetur enim?",
    },
    {
        key: "2",
        title: "Buy or sell land",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nesciunt molestias dignissimos. Ea eius nulla sequi? Rerum, voluptates necessitatibus reiciendis voluptatem aspernatur laboriosam aut quae unde laudantium! Inventore, consectetur enim?",
    },
    {
        key: "3",
        title: "Buy or sell office space",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nesciunt molestias dignissimos. Ea eius nulla sequi? Rerum, voluptates necessitatibus reiciendis voluptatem aspernatur laboriosam aut quae unde laudantium! Inventore, consectetur enim?",
    },
]

function Banner() {
    return (
        <div id='banner' className='banner-section'>
            <Carousel>
                {items.map((item) => {
                    return (
                        <div className="fluid-container" key={item.key}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btn-group">
                                    <Button type='primary' size='large'>
                                        Learn More...
                                    </Button>
                                    <Button icon={<SearchOutlined />} size='large'>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default Banner
import React from 'react'
import { Button, Collapse } from "antd";


const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quibusdam aspernatur repellendus nemo dolorem numquam? Vel alias atque quaerat, veniam qui eos pariatur totam molestias nam facilis non aperiam quas?`;

const items = [
    {
        key:"1",
        label: "How do I find the right property?",
        children: <p>{text}</p> 
    },
    {
        key:"2",
        label: "How do I know I can trust your agent?",
        children: <p>{text}</p> 
    },
    {
        key:"3",
        label: "Who are you major clients?",
        children: <p>{text}</p> 
    },
    {
        key:"4",
        label: "Do I need to create an account?",
        children: <p>{text}</p> 
    },
];

function Faqs() {
    return (
        <div id='faq' className='block faq-block'>
            <div className="fluid-container">
                <div className="title section">
                    <h2>Frequently Asked Questions</h2>
                    <p>What are the most frequently asked questions regarding properties?</p>
                </div>
                <Collapse items={items}/>
                    
                <div className="quick-support">
                    <h3>Want expedited support?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente repudiandae odio omnis libero a saepe totam harum qui. Adipisci expedita vero id accusantium quis voluptates quo, minus vitae reprehenderit.</p>
                    <Button type='primary' size='large'>
                        <i className="fas fa-envelope"></i> Email your question!
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Faqs
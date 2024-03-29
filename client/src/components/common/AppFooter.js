import React from 'react'
import { FloatButton } from "antd";
import { Link } from "react-router-dom";
import {ArrowUpOutlined} from "@ant-design/icons"


function AppFooter(){
    return (
        <div className='fluid-container'> 
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-home fa-2x"></i>
                    <Link to="/">Real Estate</Link>
                </div>
                <ul className="social-links">
                    <li>
                        <a href="https://www.twitter.com/">
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href="https://www.facebook.com/">
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/">
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    Copyright &copy; Real Estate {new Date().getFullYear()}
                </div>
                <div className="goTop">
                    <FloatButton.BackTop icon={<ArrowUpOutlined/>} type='primary'/>
                </div>
            </div>
        </div>
    )
}
export default AppFooter;
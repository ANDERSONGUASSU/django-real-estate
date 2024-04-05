import React from 'react'
import {Spinner} from '../components/Spinner'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

const LoginPage = () => {

  return (
    <>
        <Container>
            <Row>
                <Col className='mg-top text-center'>
                    <section>
                        <h1>
                            <FaSignInAlt />Login
                        </h1>
                        <hr className='hr-text' />
                    </section>
                
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LoginPage
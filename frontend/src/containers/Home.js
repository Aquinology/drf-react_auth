import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className='mainTitle'>Home Page</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

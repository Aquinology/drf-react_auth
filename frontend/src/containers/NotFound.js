import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className='mainTitle'>Not Found</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;

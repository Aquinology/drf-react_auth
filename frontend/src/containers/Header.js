import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {logout} from '../actions/authActions';


const Header = ({logout, isAuthenticated, username}) => {

    const signout = () => {
        console.log('Logout')
        logout();
    };

    const guestLinks = () => (
        <Nav>
            <Link to="/signin" style={{textDecoration: "none", color: "lightgrey", marginRight: 20}}>Sign in</Link>
            <Link to="/signup" style={{textDecoration: "none", color: "lightgrey"}}>Sign up</Link>
        </Nav>
    );

    const authLinks = () => (
        <Nav>
            <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.ItemText><Link to="/profile" style={{textDecoration: "none", color: "black"}}>Profile</Link></NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.ItemText><Link to="/" style={{textDecoration: "none", color: "black"}} onClick={signout}>Sign out</Link></NavDropdown.ItemText>
            </NavDropdown>
        </Nav>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={{textDecoration: "none", color: "lightgrey", marginLeft: 20}}>Home</Link>
                    </Nav>
                    {isAuthenticated ? authLinks() : guestLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    username: state.authReducer.user['username']
});

export default connect(mapStateToProps, {logout})(Header);

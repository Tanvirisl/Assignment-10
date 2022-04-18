import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth);
    }

    
    return (
        <div>
            <Navbar className='navbar-container' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Painting Art</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} href="#home" to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' href="#aboutUs">About-Us</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <button className='header-button' onClick={handleSignOut}>SignOut</button>:<Nav.Link href='#' as={Link} to='/login'>LogIn</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
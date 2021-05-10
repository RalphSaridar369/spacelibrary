import './App.css';
import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    constructor(props){
        super(props);
    }


    render(){
        
        const styleNav = {
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: '10vh',
                background:'rgba(33, 56, 74,0.2)'
        }

        const linkStyle= {
            textDecoration : 'none',
            fontSize:'24px',
            color:'black',
            paddingRight:'100px',
        }
        

        return (
            
            <Navbar expand="lg" variant="dark" style={styleNav} className="MainHeader">
                <Navbar.Brand style={{flex:1, paddingLeft:'30px', display:'flex', flex:'flex-start'}} className="brandHolder"href="/spacelibrary/">
                    <h2>Space Library</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger"/>
                <Navbar.Collapse id="basic-navbar-nav" className="hamburger">
                    <Nav className="mr-auto" style={{paddingRight:'30px', paddingLeft:'30px',flex:1, display:'flex',justifyContent:'flex-end',width:'20%'}} >
                        <Nav.Link className="headerLinks" href="/spacelibrary/" style={linkStyle}>
                            <h3 style={{fontSize:'24px',fontWeight:590, marginTop:'10px'}}>Home</h3>
                        </Nav.Link>
                        <Nav.Link className="headerLinks" href="/Apod/" style={linkStyle}>
                            <h3 style={{fontSize:'24px',fontWeight:590, marginTop:'10px'}}>Apod</h3>
                        </Nav.Link>
                        <Nav.Link className="headerLinks" href="/About/"  style={linkStyle}>
                            <h3 style={{fontSize:'24px',fontWeight:590, marginTop:'10px'}}>About</h3>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
             </Navbar> 

        );            
       /*
         */
    }
}

export default Header;

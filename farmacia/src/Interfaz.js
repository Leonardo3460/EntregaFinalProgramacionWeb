import React from 'react';
import './App';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

export const Navegacion = () => {
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top" className="d-flex justify-content-between">
        <div>
          <NavLink className="nav-link" to="/">
            <img src="img/logo.png" className="imagen" alt="Logo" />
          </NavLink>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <NavLink className="nav-link" to="/Ver">Ver Medicamentos</NavLink>
                <NavLink className="nav-link" to="/Agregar">Agregar Medicamentos</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

  export const Navegacion2 = () => {
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="d-flex justify-content-between">
        <div>
          <Navbar.Brand>
            <img src="img/logo.png" className="imagen" alt="Logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <NavLink className="nav-link" to="/Ver">Ver Medicamentos</NavLink>
                <NavLink className="nav-link" to="/Agregar">Agregar Medicamentos</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

  export const Pie = () => {
    return(
      <div id="footer">
        Maracaibo, Venezuela. Universidad Rafael Belloso Chacín.<br/>Presentado por Leonardo Parra C.I.: 28.197.458
      </div>
    );
  };

  export const Inicio = () => {
    return(
      <div>
        <img src='img/fachada-farmacia-saas.jpg' className="imagen1"/>
        <img src='img/Nueva-Claret-Fachada-1.jpg' className="imagen1"/>
      </div>
    );
  }
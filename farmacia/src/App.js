import './App.css';
import React from 'react';
import {Navegacion,Navegacion2,Pie,Inicio} from './Interfaz';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Ver} from './Ver';
import {Agregar} from './Agregar';
import { ProductoPDF } from './ProductoPDF';

const App = () => {
  return <Router>
    <Navegacion2/>
    <Navegacion/>
    <Routes>
      <Route exact path='/' element={<Inicio/>} />
      <Route exact path='/Ver' element={<Ver/>} />
      <Route exact path='/Agregar' element={<Agregar/>} />
      <Route exact path='/PDF' element={<ProductoPDF/>} />
    </Routes>
    <Pie/>
  </Router>
}
export {App}

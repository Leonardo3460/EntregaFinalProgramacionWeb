import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

export const Agregar = () => {
  const [imagen, setImagen] = useState(null);
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["nombre", "cantidad", "codigo", "lote", "principio", "farma", "fechav", "ingresa", "proveedor", "factura"];
    const emptyFields = requiredFields.filter((field) => !inputs[field] || inputs[field].length === 0);
    if (emptyFields.length > 0) {
      alert(`Por favor, complete los siguientes campos: ${emptyFields.join(", ")}`);
      return;
    }

    const integerFields = ["cantidad", "codigo", "lote"];
    const nonIntegerFields = integerFields.filter((field) => !Number.isInteger(Number(inputs[field])));
    if (nonIntegerFields.length > 0) {
      alert(`Los siguientes campos deben ser números enteros: ${nonIntegerFields.join(", ")}`);
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(inputs.fechav);
    if (selectedDate <= currentDate) {
      alert("Por favor seleccione una fecha correcta");
      return;
    }

    const formData = new FormData();
    for (const key in inputs) {
      formData.append(key, inputs[key]);
    }
    formData.forEach((value, key) => {
      console.log(key + ": " + value);
    });
    formData.append("imagen", imagen);
    axios
      .post("http://localhost/farmacia/public/recibirdatos.php", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    window.location.reload();
  };

  return (
    <div id="agregar">
      <h1>Agregar Productos</h1>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" onChange={handleChange} className="borde" placeholder="Ingrese Nombre" autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            name="cantidad"
            onChange={handleChange}
            className="borde"
            placeholder="Ingrese Cantidad" autoComplete='off'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Principio Activo</Form.Label>
          <Form.Control
            type="text"
            name="principio"
            onChange={handleChange}
            className="borde "
            placeholder="Ingrese Principio Activo" autoComplete='off'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Clasificación</Form.Label>
          <Form.Control as="select" name="clasificacion" onChange={handleChange} className="borde">
            <option></option>
            <option>Psicotrópico</option>
            <option>Analgésico</option>
            <option>Antiinflamatorio</option>
            <option>Antigripal</option>
            <option>Antitusígeno</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Farmaceuta</Form.Label>
          <Form.Control type="text" name="farma" onChange={handleChange} className='borde' placeholder='Ingrese Farmaceutica' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control type="date" name="fechav" onChange={handleChange} className='borde'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Codigo de Barra</Form.Label>
          <Form.Control type="text" name="codigo" onChange={handleChange} className='borde' placeholder='Ingrese Nombre' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Quien Ingresa</Form.Label>
          <Form.Control type="text" name="ingresa" onChange={handleChange} className='borde' placeholder='Personal que lo Ingresa' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Proveedor</Form.Label>
          <Form.Control type="text" name="proveedor" onChange={handleChange} className='borde' placeholder='Ingrese Proveedor' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Lote</Form.Label>
          <Form.Control type="text" name="lote" onChange={handleChange} className='borde' placeholder='Ingrese Lote' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Factura de recepción</Form.Label>
          <Form.Control type="text" name="factura" onChange={handleChange} className='borde' placeholder='Ingrese Factura' autoComplete='off'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Seleccione una Imagen</Form.Label>
          <Form.Control type="file" accept="image/*" name="imagen" id="imagen" onChange={handleImagenChange} className='borde' />
        </Form.Group>
        <br/>
        <Button type="submit" onClick={handleSubmit}>
          Agregar Producto
        </Button>
    </Form>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { Table, Button, Accordion, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const Ver = () => {
  const [productos, setProductos] = useState([]);
  const [botonActivo, setBotonActivo] = useState(true);

  const GenerarPDF = ({ producto }) => {
    const navigate = useNavigate();

    const handleDownload = () => {
      navigate("/PDF", { state: {producto}});
    };
    return (
      <Button onClick={handleDownload}>Generar Reporte PDF</Button>
      
    );
  };

  const handleCodigo = (id) => {
    setBotonActivo(id);
  };

  useEffect(() => {
    
    fetch('http://localhost/farmacia/public/enviardatos.php')
      .then(response => response.json())
      .then(data => {const productosDecodificados = data.map(producto => {
        const imagenDecodificada = atob(producto.imagen);
        return { ...producto, imagen: imagenDecodificada };
      });
      setProductos(productosDecodificados);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 id="agregar">Listado de Inventario</h1>
      
      <Table striped bordered hover>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagen} width="200" height="200"/>
              </td>
              <td>
              <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>{producto.nombre}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Principio Activo: {producto.principio}</p>
                        <p>Clasificación: {producto.clasificacion}</p>
                        <p>Farmaceuta: {producto.farma}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>Fecha de Vencimiento: {producto.fechav}</p>
                        <p>Vence en: {producto.diasv + " días"}
                          {producto.mesv !== "0" ? ", " + producto.mesv + " meses" : ""}
                          {producto.añov !== "0" ? ", " + producto.añov + " años" : ""}.
                        </p>
                        <p>Ingreso al sistema: {producto.fechaingreso}</p>
                        <p>Personal que lo ingresa: {producto.ingresa}</p>
                        {botonActivo === producto.id ? (
                          <p>{"Código: "+producto.codigo}</p>
                        ) : (
                          <Button variant="primary" onClick={() => handleCodigo(producto.id)}>
                            Mostrar Código de Barra
                          </Button>
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
              <td>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>Proveedor: {producto.proveedor}</p>
                        <p>Lote: {producto.lote}</p>
                        <p>Factura de recepción: {producto.factura}</p>
                        <p>Número de control de la factura: {producto.id}</p>
                        <GenerarPDF producto={producto} />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

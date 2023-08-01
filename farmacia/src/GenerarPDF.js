import React from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';

const GenerarPDF = ({ producto }) => {
  return (
    <Document title={`${producto.nombre}.pdf`}>
      <Page size="A4" style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}>
        <View style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10, margin: "5%"
          }}>
          <Image src={producto.imagen} />
          <Text style={{ fontSize: 15, margin: 10 }}>{producto.nombre}</Text>
          <Text></Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Cantidad: {producto.cantidad}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Principio Activo: {producto.principio}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Clasificacion: {producto.clasificacion}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Farmaceuta: {producto.farma}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Código de Barras: {producto.codigo}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Fecha de Vencimiento: {producto.fechav}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Fecha de Ingreso al Sistema: {producto.fechaingreso}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Personal que lo Ingresa: {producto.ingresa}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Proveedor: {producto.proveedor}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Lote: {producto.lote}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Factura de Recepción: {producto.factura}</Text>
          <Text style={{ fontSize: 12, margin: 10 }}>Número de control de la Factura: {producto.id}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default GenerarPDF;
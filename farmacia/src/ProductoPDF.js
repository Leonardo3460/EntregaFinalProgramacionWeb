import React from 'react';
import { useLocation } from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';
import GenerarPDF from './GenerarPDF';

export const ProductoPDF = () => {
  const { state: { producto } } = useLocation();
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <GenerarPDF producto={producto} />
      </PDFViewer>
    </div>
  );
};
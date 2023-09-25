import React, { useRef } from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, View } from '@react-pdf/renderer';
import './styles/pdfGenerator.css';
import DisplayCV from './displayCV';
import person from './data.jsx'


import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFGenerator = () => {
  const pdfRef = useRef();
  
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('TEST.pdf')
    })
  }

  return (
    <>
    <div id='pdf' ref={pdfRef}>
      <DisplayCV data={person}></DisplayCV>
    </div>
    <button className='pdf-down' onClick={downloadPDF}>PDF</button>
    </>
  )

  // Your existing <div> content
  // const existingDivContent = (<DisplayCV data={person}></DisplayCV>)
  // return (
  //   <div id='pdf'>
  //     <PDFViewer width={600} height={400}>
  //       <Document>
  //         <Page size="A4">
  //           <View style={{ padding: 10 }}>{existingDivContent}</View>
  //         </Page>
  //       </Document>
  //     </PDFViewer>
  //     <PDFDownloadLink
  //       document={
  //         <Document>
  //           <Page size="A4">
  //             <View style={{ padding: 10 }}>{existingDivContent}</View>
  //           </Page>
  //         </Document>
  //       }
  //       fileName="my-pdf.pdf"
  //     >
  //       {({ blob, url, loading, error }) =>
  //         loading ? 'Loading document...' : 'Download PDF'
  //       }
  //     </PDFDownloadLink>
  //   </div>
  // );
};

export default PDFGenerator;

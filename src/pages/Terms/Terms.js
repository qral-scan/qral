import React, {useEffect} from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import termsPDF from '../../docs/terms.pdf';

function Terms() {
  
  useEffect(() => { 
    pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  return (
    <>
      <Document file={termsPDF}>
        <Page pageNumber={1} />
      </Document>
    </>
  );
}

export default Terms;
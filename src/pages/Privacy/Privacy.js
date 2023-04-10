import React, {useEffect} from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import privacyPDF from '../../docs/privacy.pdf';

function Privacy() {
  
  useEffect(() => { 
    pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  return (
    <>
      <Document file={privacyPDF}>
      <Page pageNumber={1} />
      </Document>
    </>
  );
}

export default Privacy;
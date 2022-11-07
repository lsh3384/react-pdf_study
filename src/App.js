import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document file="https://www.africau.edu/images/default/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}> */}
      <Document file="http://localhost:8083/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && (
        <button onClick={() => setPageNumber(prev => prev + -1)}>
          이전페이지
        </button>
      )}
      {pageNumber < numPages && <button onClick={() => setPageNumber(prev => prev + +1)}>다음페이지</button>}
    </div>
  );
}

export default App;

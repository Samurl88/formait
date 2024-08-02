import '../App.css';
import React, { useState } from 'react'
import './Upload.css'

import axios from 'axios';
import { Document, pdfjs, Page } from 'react-pdf'


function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  const [pdfFile, setPdfFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setPdfFile(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div>Here's the thing!</div>

      <div>
        <input type="file" accept="application/pdf" onChange={onFileChange} />
        {pdfFile && (
          <Document
            file={pdfFile}
          >
            <Page pageNumber={1} width={500} renderTextLayer={false} />
          </Document>
        )}
      </div>
    </>
  );
  // const [pdf, setPDF] = useState(null);
  // const [template, setTemplate] = useState(null);

  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   'pdfjs-dist/build/pdf.worker.min.mjs',
  //   import.meta.url,
  // ).toString();

  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     // setPDF(e.target.files[0]);
  //     console.log(e.target.files[0])

  //     const formData = new FormData();
  //     formData.append('file', e.target.files[0]);

  //     setPDF(formData)

  //     console.log(formData)
  //   }
  // };

  // const handleTemplateChange = (e) => {
  //   if (e.target.files) {
  //     setTemplate(e.target.files[0]);
  //     console.log(e.target.files[0])
  //   }
  // };


  // return (
  //   <div className="app">

  //     <div className="parent">
  //       <div className="file-upload">
  //         <h3>Upload PO</h3>
  //         <input type="file" accept="application/pdf" onChange={handleFileChange} />
  //       </div>
  //       <Document file={pdf} onLoadSuccess={() => console.log("success")}>
  //         <Page pageNumber={0} />
  //       </Document>
  //     </div>
  //     <div className="parent">
  //       <div className="file-upload">
  //         <h3>Upload Template</h3>
  //         <input type="file" accept="application/vnd.ms-excel" onChange={handleTemplateChange} />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;

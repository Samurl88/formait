import '../App.css';
import React, { useState } from 'react'
import './Upload.css'

import axios from 'axios';
import { Document, pdfjs, Page } from 'react-pdf'

function App() {
  const [pdf, setPDF] = useState(null);
  const [template, setTemplate] = useState(null);


  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0])

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      console.log(formData)
      setPDF(formData)
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", padding: "30px 100px", display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}>Convert PO to Excel Sheet</div>
      <div style={{ flex: 1, display: "flex", }}>
        <div style={{ display: "flex", gap: "100px", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", flex: 1, }}>
          <div className="parent">
            <div className="file-upload">
              <h3>Upload PO</h3>
              <input type="file" accept="application/pdf" />
            </div>
          </div>

          <div className="parent">
            <div className="file-upload">
              <h3>Upload Template</h3>
              <input type="file" accept="application/vnd.ms-excel" />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "100px", flexDirection: "column", height: "100%", justifyContent: "center" }}>
         <p style={{fontSize: 100}}>➡️</p>
        </div>

        <div style={{ display: "flex", gap: "100px", flexDirection: "column", height: "100%", justifyContent: "center", flex: 1, alignItems: "center", }}>
          <div style={{ border: "3px dashed rgb(217, 210, 244)", width: "30vw", height: "75vh", borderRadius: 15, justifyContent: "center", alignItems: "center", display: "flex" }}>
            <p style={{ color: "rgb(196, 181, 255)", fontStyle: "italic", fontSize: "20px" }}>Completed spreadsheet will appear here.</p>
          </div>
        </div>
      </div>
    </div>

  );

}

{/* <div className="App">
<button onClick={() => {
  console.log("sup")
  axios.post(`http://127.0.0.1:5000/`)
    .then(res => {
      console.log(res)
    })
}}>Hello there</button>


</div> */}

// function App() {
//   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
//   ).toString();

//   const [pdfFile, setPdfFile] = useState(null);

//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     const fileReader = new FileReader();
//     fileReader.onload = (e) => {
//       setPdfFile(e.target.result);
//     };
//     fileReader.readAsDataURL(file);
//   };

//   return (
//     <div style={{ padding: "30px", }}>
//       <div style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold" }}>Convert PO to Excel Sheet</div>
//       <div className="parent">
//         <div className="file-upload">
//           <h3>Upload PO</h3>
//           <input type="file" accept="application/pdf" onChange={onFileChange} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;

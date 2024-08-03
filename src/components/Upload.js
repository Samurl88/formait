import '../App.css';
import React, { useState } from 'react'
import './Upload.css'
import axios from 'axios';
import { Document, pdfjs, Page } from 'react-pdf'
import { TbTriangleFilled } from "react-icons/tb";
import { PuffLoader } from 'react-spinners';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';

function App() {
  const [pdf, setPDF] = useState(null);
  const [pdfTitle, setPDFTitle] = useState(null);
  const [template, setTemplate] = useState(null);
  const [templateTitle, setTemplateTitle] = useState(null);

  const [loading, setLoading] = useState(false)
  const [returnedFile, setReturnedFile] = useState(null)


  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])

  const [download, setDownload] = useState(null)

  const sendData = async () => {

    setLoading(true)
    const formData = new FormData();
    formData.append('pdf', pdf);
    formData.append('template', template)

    const response = await axios.post('http://127.0.0.1:5000/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: "blob"
    });

    setLoading(false)

    console.log('File uploaded successfully:', response.data)

    const link = URL.createObjectURL(response.data)

    console.log(link)
    setDownload(link)

    ExcelRenderer(response.data, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        setColumns(resp.cols)
        setRows(resp.rows)
        console.log("Done!")
      }
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      try {
        console.log(e.target.files[0])
        console.log("E")

        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        console.log(formData)
        setPDF(file)
        setPDFTitle(file.name)
      } catch {

      }
    }
  };

  const handleTemplateChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0])
      try {
        console.log(e.target.files[0])

        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);

        console.log(formData)
        setTemplate(file)
        setTemplateTitle(file.name)
      } catch {

      }
    }
  };

  console.log(rows)
  console.log(columns)

  function downloadFile() {
    var a = document.createElement('a');
    a.download = "completed";
    a.href = download;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div style={{ width: "100vw", height: "90vh", padding: "30px 10px", display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold", marginBottom: 70 }}>Convert PO to Excel Sheet</div>
      <div style={{ flex: 1, display: "flex", width: "90%", alignSelf: "center", }}>
        <div style={{ display: "flex", gap: "100px", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "flex-start", }}>
          <div className="parent">
            <div className="file-upload">
              {pdf
                ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 50, lineHeight: 1 }}>✅</div>
                  <div><span style={{ fontWeight: "bold" }}>PO: </span>{pdfTitle}</div>
                </div>
                : <h3>Upload PO</h3>
              }
              <input type="file" accept="application/pdf" onChange={handleFileChange} />
            </div>
          </div>

          <div className="parent">
            <div className="file-upload">
              {template
                ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 50, lineHeight: 1 }}>✅</div>
                  <div><span style={{ fontWeight: "bold" }}>Template: </span>{templateTitle}</div>
                </div>
                : <h3>Upload Excel Template</h3>
              }
              <input type="file" accept="application/vnd.ms-excel" onChange={handleTemplateChange} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "100px", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", flex: 1, }}>
          <div onClick={pdf && template && sendData} className={pdf && template ? loading ? "loadingBtn" : "btn" : "disabledBtn"}>
            {loading
              ? <PuffLoader />
              : <TbTriangleFilled size={55} style={{ transform: "rotate(90deg)" }} color={pdf && template ? "black" : "lightgray"} />
            }
          </div>
        </div>

        <div style={{ display: "flex", gap: "30px", flexDirection: "column", height: "100%", justifyContent: "center", flex: 1, alignItems: "flex-start", }}>
          <div className={rows.length ? "yesSpreadsheet" : "noSpreadsheet"}>
            {rows.length
              ? <OutTable data={rows} columns={columns} tableClassName="ExcelTable" tableHeaderRowClass="heading" />
              : <p style={{ color: "rgb(196, 181, 255)", fontStyle: "italic", fontSize: "20px", }}>Completed spreadsheet will appear here.</p>
            }
          </div>
          <a onClick={downloadFile} className={rows.length ? "activeExport" : "disabledExport"} download="completed.xlsx">Export</a>
        </div>
      </div>
    </div>
  );
}

export default App;


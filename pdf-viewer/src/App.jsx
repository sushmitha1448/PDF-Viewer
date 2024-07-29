import { useState } from 'react'
import { pdfjs } from 'react-pdf';
import {Document} from 'react-pdf'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfComponent from './PdfComponet';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PdfComponent/>
     </>
  )
}

export default App

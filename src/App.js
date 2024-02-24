import './App.css';
import {Html5QrcodeScanner} from 'html5-qrcode';
import { useEffect, useState } from 'react';

function App() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scaner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
  
    scaner.render(success, error);
  
    function success(result){
      scaner.clear();
      setScanResult(result);
    }
  
    function error(err){
      console.warn(err);
    }
  
  }, []);

  
  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      {
        scanResult ? <div>Success: <a href={"https://"+scanResult}>{scanResult}</a></div> :  <div id='reader'></div>
      }
     
    </div>
  );
}

export default App;

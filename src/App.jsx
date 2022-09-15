import QRCode from 'qrcode';
import { useState } from 'react';
function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrCode] = useState();

  const generateQrCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrCode(url);
      }
    );
  };

  return (
    <div className='app'>
      <h2>QR code Generator</h2>
      <input
        type='text'
        placeholder='https://google.cl'
        name=''
        id=''
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQrCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt='' />
          <a href={qrcode} download='qrcode.png'>
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;

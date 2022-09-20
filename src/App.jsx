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

  const handleResetField = () => {
    setUrl('');
    setQrCode('');
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

      <div className='centered-buttons'>
        <button className='btn btn-generate' onClick={generateQrCode}>
          Generate
        </button>

        {url && (
          <button className='btn btn-reset' onClick={handleResetField}>
            Reset
          </button>
        )}
      </div>

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

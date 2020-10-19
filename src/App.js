import React from 'react';
import './App.css';
import { ImageUpload } from './Components/ImageUploadComponent/ImageUpload'
import { Header } from './Components/Header'
function App() {
  return (
    <div className="App">
      <div className="content">
        <Header/>
        <ImageUpload/>
          <footer style={{
          position: 'fixed',
          left: '0',
          bottom: '0',
          paddingBottom: '10px',
          width: '100%',
          textAlign: 'center',
          fontSize:'12px'
        }}>Made with ❤️ by Henry, Yash, and Justin ©️ 2020
        <a href="https://github.com/Noteable-DubHacks2020/Noteable" style={{marginLeft:'8px', color:'#2082E8'}}>Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

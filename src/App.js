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
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './Popup.css';
import Markdown from 'react-markdown';

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>Popup</h1>
        <p>Popup content</p>
      </div>
    </div>
  )
}

export default Popup;

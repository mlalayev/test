import React from 'react';  // React 17 ve sonrasında JSX kullanımı için bu gereklidir
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot ile render işlemi
root.render(<App />);

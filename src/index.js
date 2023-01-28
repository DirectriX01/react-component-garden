//import react and reactDOm
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// get a reference to the root element
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
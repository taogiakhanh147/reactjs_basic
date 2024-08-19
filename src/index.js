import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import { StoreProvider, StoreContext } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

// Fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //<ThemeProvider>
  //<App />
  //</ThemeProvider>

  // <React.StrictMode>
  //   <StoreProvider>
  //     <App />
  //   </StoreProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

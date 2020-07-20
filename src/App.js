<<<<<<< HEAD
import React from 'react';
import './scss/style.scss';


import { TheFooter, TheHeader } from './containers/index'



function App() {
  return (
    <div>
      <TheHeader />
    
      <TheFooter />
=======
import React from "react";
import { CFooter } from "@coreui/react";
import "./scss/style.scss";
// COMENTARIO
function App() {
  return (
    <div>
      <h1>Test React App</h1>
      <CFooter fixed={false}>
        <div>
          <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
            CoreUI
          </a>
          <span className="ml-1">&copy; 2020 creativeLabs.</span>
        </div>
        <div className="mfs-auto">
          <span className="mr-1">Powered by</span>
          <a
            href="https://coreui.io/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoreUI for React
          </a>
        </div>
      </CFooter>
>>>>>>> d87dda80a73cb7e4d98e1e74a165f770774791d4
    </div>
  );
}

export default App;

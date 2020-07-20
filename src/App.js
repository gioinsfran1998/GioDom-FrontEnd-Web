<<<<<<< HEAD
import React from "react";
import { CFooter } from "@coreui/react";
import "./scss/style.scss";
=======
import React from 'react';
import './scss/style.scss';

import { TheFooter, TheHeader } from './containers/index'


>>>>>>> 191781ab6ce5db0fea5df0e896c5463fe3ca5555

function App() {
  return (
    <div>
<<<<<<< HEAD
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
=======
      <TheHeader />
      
      <TheFooter />
>>>>>>> 191781ab6ce5db0fea5df0e896c5463fe3ca5555
    </div>
  );
}

export default App;

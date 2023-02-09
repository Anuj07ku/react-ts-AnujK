import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import App from './App';
//import App from './src/Functionaltest';
//import App from './src/classtest';
//import App from './src/Reusablecomponent';
import App from './src/Reusablefunctionalcomponentprops';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

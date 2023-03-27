import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import App from './App';
//import App from './src/Functionaltest';
//import App from './src/classtest';
//import App from './src/Reusablecomponent';
//import App from './src/Reusablefunctionalcomponentprops';
//import App from './src/EventHandler';
//import App from './src/ReactState';
//import App from './src/refReact';
//import App from './src/propType';
//import App from './src/reactLifecycle';
//import App from './src/reactComposablecomponent/reusablecomponent';
//import App from './src/HOC/Hoc';
//import App from './src/RendProps/RProp';
import App from './src/EmployFormFormix';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

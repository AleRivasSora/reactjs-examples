import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Contador }  from './componentes/contador';
import { Calculadora } from './componentes/calculadora';
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Tareas } from './componentes/tareas';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/contador',
    element:<Contador />
  },
  {
    path:'/calculadora',
    element:<Calculadora />
  },
  {
    path:'/tareas',
    element:<Tareas />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


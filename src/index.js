import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import { Windowsdash } from './components/page/dashboard';
import { Usuarios } from './components/page/usuarios';
import { ErrorPage } from './components/page/ErrorPage';
import { Pageprodutos } from './components/page/produtos';
import { Notificacoes } from './components/page/notificacoes';
import { Imagem } from './components/page/image';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/windowsdash",
        element:<Windowsdash></Windowsdash>
      },
      {
        path:"/usuarios",
        element:<Usuarios></Usuarios>,
      },
      {
        path:"/notificacoes",
        element:<Notificacoes></Notificacoes>
      },
      {
        path:"/produtos",
        element:<Pageprodutos></Pageprodutos>
      },
      {
        path:"/imagens",
        element:<Imagem></Imagem>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

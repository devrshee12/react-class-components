import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Counter from './components/Counter';
import UsersList from './components/UsersList';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/counter",
    element: <Counter/>
  },
  {
    path:"/users",
    element:<UsersList/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

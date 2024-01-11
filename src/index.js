import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Counter from './components/Counter';
// import UsersList from './components/UsersList';
import ParentComponent from './components/Parentcomponent';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import HocApp from './components/HocApp';
import MemoParent from './components/MemoParent';
import MemoChild from './components/MemoChild';
const UsersList = lazy(() => import("./components/UsersList")) // used lazy loading 



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/memo",
    element: <MemoParent></MemoParent>,
  },
  {
    path: "/ref-direct-focus",
    element: <FocusInput/>
  },
  {
    path: "/forward-ref",
    element: <FRParentInput/>
  },
  {
    path:"/hoc",
    element: <HocApp/>
  },
  {
    path:"/counter",
    element: <Counter/>
  },
  {
    path:"/users",
    element:<Suspense fallback="Loading ..."><UsersList/></Suspense>
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

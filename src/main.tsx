import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./routes/Home.tsx"
import Races from "./routes/Races.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "races", element: <Races /> }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
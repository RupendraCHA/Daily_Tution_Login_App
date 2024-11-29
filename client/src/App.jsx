import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import all routers

import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'

// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root Route</div>
  },
  {
    path: "/register",
    element: <div>Register Route</div>
  }
])

const App = () => {
  return (
    <main>
      <RouterProvider router={router}>
      </RouterProvider>
    </main>
  )
}

export default App
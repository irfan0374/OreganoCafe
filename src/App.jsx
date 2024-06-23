import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'

import UserRoutes from './Routes/userRoutes'
import React from 'react'

function App() {

  return (
<Router>
  <Routes>
    <Route path='/*' element={<UserRoutes/>}/>

  </Routes>
</Router>
  )
}

export default App

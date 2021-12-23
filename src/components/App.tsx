import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '~/pages/Home.page'
import UseScrollPositionPage from '~/pages/examples/UseScrollPosition.page'
import UseScrollDirectionPage from '~/pages/examples/UseScrollDirection.page'
import UseScrollOverPage from '~/pages/examples/UseScrollOver.page'

const App = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/examples/use-scroll-position' element={<UseScrollPositionPage />} />
    <Route path='/examples/use-scroll-direction' element={<UseScrollDirectionPage />} />
    <Route path='/examples/use-scroll-over' element={<UseScrollOverPage />} />
    <Route element={<p>Page not found</p>} />
  </Routes>
)

export default App

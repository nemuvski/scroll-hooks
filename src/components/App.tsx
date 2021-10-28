import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '~/pages/Home.page'
import UseScrollPositionPage from '~/pages/examples/UseScrollPosition.page'
import UseScrollDirectionPage from '~/pages/examples/UseScrollDirection.page'
import UseScrollOverPage from '~/pages/examples/UseScrollOver.page'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/examples/use-scroll-position' component={UseScrollPositionPage} />
      <Route exact path='/examples/use-scroll-direction' component={UseScrollDirectionPage} />
      <Route exact path='/examples/use-scroll-over' component={UseScrollOverPage} />
      <Route render={() => <p>Page not found</p>} />
    </Switch>
  </BrowserRouter>
)

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '~/components/Layout'

const HomePage = () => (
  <Layout>
    <h1>Examples</h1>
    <ul>
      <li>
        <Link to='/examples/use-scroll-position'>useScrollPosition</Link>
      </li>
      <li>
        <Link to='/examples/use-scroll-direction'>useScrollDirection</Link>
      </li>
      <li>
        <Link to='/examples/use-scroll-over'>useScrollOver</Link>
      </li>
    </ul>
  </Layout>
)

export default HomePage

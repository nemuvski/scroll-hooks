import React from 'react'
import { useScrollPosition } from '~/hooks/scroll'
import Layout from '~/components/Layout'
import Center from '~/components/Center'

const UseScrollPositionPage = () => {
  const position = useScrollPosition()

  return (
    <Layout isScrollable>
      <Center>{position}</Center>
    </Layout>
  )
}

export default UseScrollPositionPage

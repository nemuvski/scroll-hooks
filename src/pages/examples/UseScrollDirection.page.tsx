import React, { useMemo } from 'react'
import { ScrollDirection, useScrollDirection } from '~/hooks/scroll'
import Layout from '~/components/Layout'
import Center from '~/components/Center'

const UseScrollDirectionPage = () => {
  const direction = useScrollDirection()

  const renderContent = useMemo(() => {
    if (!direction) return '📜'
    return direction === ScrollDirection.Up ? '⬆' : '⬇'
  }, [direction])

  return (
    <Layout isScrollable>
      <Center>{renderContent}</Center>
    </Layout>
  )
}

export default UseScrollDirectionPage

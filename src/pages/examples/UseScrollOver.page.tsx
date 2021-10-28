import React, { useMemo } from 'react'
import { useScrollOver } from '~/hooks/scroll'
import Layout from '~/components/Layout'
import Center from '~/components/Center'

const THRESHOLD = 300

const UseScrollOverPage = () => {
  const isOver = useScrollOver(THRESHOLD)

  const renderContent = useMemo(() => {
    return isOver ? 'over' : 'not over'
  }, [isOver])

  return (
    <Layout isScrollable>
      <Center>{renderContent}</Center>
    </Layout>
  )
}

export default UseScrollOverPage

import React, { useMemo } from 'react'
import {useScrollDirection, ScrollDirection, useScrollOver} from '~/hooks/scroll'

const THRESHOLD = 300

const App = () => {
  const direction = useScrollDirection()
  const isOver = useScrollOver(THRESHOLD)

  const renderDirection = useMemo(() => {
    if (!direction) return '📜'
    return direction === ScrollDirection.Up ? '⬆' : '⬇'
  }, [direction])

  const renderOver = useMemo(() => {
    if (isOver) {
      return '✅'
    } else {
      return null
    }
  }, [isOver])

  return (
    <div className='app'>
      <div className='app__inner'>
        <div>{renderDirection}</div>
        <div>{renderOver}</div>
      </div>
    </div>
  )
}

export default App

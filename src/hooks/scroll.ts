import {useEffect, useRef, useState} from 'react'

/**
 * スクロール方向の識別子
 */
export const ScrollDirection = {
  Up: 'up',
  Down: 'down',
} as const
export type ScrollDirectionType = typeof ScrollDirection[keyof typeof ScrollDirection]

/**
 * 垂直方向のスクロール量を取得する
 *
 * @returns number
 */
export const useScrollPosition = () => {
  const isProcessing = useRef(false)
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    const handler = () => {
      if (isProcessing.current) return
      isProcessing.current = true
      window.requestAnimationFrame(() => {
        isProcessing.current = false
        setPositionY(window.scrollY)
      })
    }
    document.addEventListener('scroll', handler, { passive: true })
    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [])

  return positionY
}

/**
 * スクロール方向の情報を取得する
 *
 * @returns ScrollDirectionType|null
 */
export const useScrollDirection = () => {
  const positionY = useScrollPosition()
  const previousPositionY = useRef(positionY)
  const [direction, setDirection] = useState<ScrollDirectionType | null>(null)

  useEffect(() => {
    if (positionY < previousPositionY.current) {
      setDirection(ScrollDirection.Up)
    } else if (positionY > previousPositionY.current) {
      setDirection(ScrollDirection.Down)
    } else {
      setDirection(null)
    }

    previousPositionY.current = positionY
  }, [positionY])

  return direction
}

/**
 * 指定した位置を越えたか否かを取得する
 *
 * @param threshold
 * @returns boolean
 */
export const useScrollOver = (threshold: number) => {
  const positionY = useScrollPosition()
  return positionY > threshold
}

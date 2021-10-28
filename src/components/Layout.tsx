import React, { useMemo } from 'react'

type Props = {
  isScrollable?: boolean
}

const Layout: React.FC<Props> = ({ children, isScrollable = false }) => {
  const rootClassName = useMemo(() => {
    const classNameList = ['layout']
    if (isScrollable) classNameList.push('is-scrollable')
    return classNameList.join(' ')
  }, [isScrollable])

  return <div className={rootClassName}>{children}</div>
}

export default Layout

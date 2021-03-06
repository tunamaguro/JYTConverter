import { FC, ReactElement, useEffect } from 'react'

import init from './index'

export const WasmInitializer: FC<{ children: ReactElement }> = ({
  children,
}) => {
  useEffect(() => {
    init()
  }, [])
  return children
}

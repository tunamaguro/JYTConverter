import { FC } from 'react'

import { ConverterBase } from './ConverterBase'
import { useSelectorDispatch } from './SelectorProvider'

const lineToPreTag = (text: string) => {
  const reg = /\n/g
  const exp = `${text}`
  return (
    exp
      .split(reg)
      // eslint-disable-next-line react/no-array-index-key
      .map((v, index) => <pre key={`output-line-${index}`}>{v}</pre>)
  )
}

type ConverterOutputProps = { content?: string; error?: Error }

export const ConverterOutput: FC<ConverterOutputProps> = ({
  content,
  error,
}) => {
  const dispatch = useSelectorDispatch()
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
  return (
    <ConverterBase
      defaultSelected="YAML"
      onSelectorChange={(v) => {
        dispatch({ type: 'ChangeMode', output: v })
      }}
    >
      <div className="text-xl whitespace-pre-line overflow-x-auto">
        {error && (
          <p className="text-gray-400 select-none">
            Failed to convert &nbsp;:(
          </p>
        )}
        {content ? (
          lineToPreTag(content)
        ) : (
          <p className="text-gray-400 select-none">Waiting for input...</p>
        )}
      </div>
    </ConverterBase>
  )
}

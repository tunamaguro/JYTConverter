import { FC } from 'react'

import { ConverterBase } from './ConverterBase'

const lineToPreTag = (text: string) => {
  const reg = /\n/g
  const exp = `${text}`
  return exp.split(reg).map((v) => <pre key={`output-content-${v}`}>{v}</pre>)
}

type ConverterOutputProps = { content?: string }

export const ConverterOutput: FC<ConverterOutputProps> = ({ content }) => (
  <ConverterBase onSelectorChange={console.log}>
    <div className="text-xl">
      {content ? (
        lineToPreTag(content)
      ) : (
        <p className="text-gray-400 select-none">入力待機中...</p>
      )}
    </div>
  </ConverterBase>
)

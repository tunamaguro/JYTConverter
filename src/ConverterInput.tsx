import { FC } from 'react'

import { ConverterBase } from './ConverterBase'
import { AutoResizeTextArea } from './TextArea'

export const ConverterInput: FC = () => (
  <ConverterBase onSelectorChange={console.log}>
    <AutoResizeTextArea
      className="w-full min-h-[12rem] h-full text-xl resize-none focus:outline-none"
      placeholder="テキストを入力"
    />
  </ConverterBase>
)

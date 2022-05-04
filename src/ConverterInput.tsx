import { FC } from 'react'

import { ConverterBase } from './ConverterBase'
import { AutoResizeTextArea } from './TextArea'

export const ConverterInput: FC = () => (
  <ConverterBase>
    <AutoResizeTextArea
      className="w-full min-h-[16rem] h-full pt-2 text-xl resize-none"
      placeholder="テキストを入力"
    />
  </ConverterBase>
)

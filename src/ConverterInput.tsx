import { FC } from 'react'

import { ConverterBase } from './ConverterBase'
import { useSelectorDispatch } from './SelectorProvider'
import { AutoResizeTextArea } from './TextArea'

export const ConverterInput: FC = () => {
  const dispatch = useSelectorDispatch()
  return (
    <ConverterBase
      onSelectorChange={(v) => {
        dispatch({ type: 'ChangeMode', input: v })
      }}
    >
      <AutoResizeTextArea
        className="w-full min-h-[12rem] h-full text-xl resize-none focus:outline-none"
        placeholder="テキストを入力"
      />
    </ConverterBase>
  )
}

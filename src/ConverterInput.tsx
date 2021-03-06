import {
  ChangeEventHandler,
  ComponentProps,
  forwardRef,
  KeyboardEventHandler,
} from 'react'

import { ConverterBase } from './ConverterBase'
import { useSelectorDispatch } from './SelectorProvider'
import { AutoResizeTextArea } from './TextArea'

type ConverterInputProps = {
  value?: string
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>
  onInputAreaChange?: ChangeEventHandler<HTMLTextAreaElement>
} & Pick<ComponentProps<typeof AutoResizeTextArea>, 'ref'>

export const ConverterInput = forwardRef<
  HTMLTextAreaElement,
  ConverterInputProps
  // eslint-disable-next-line react/prop-types
>(({ value, onInputAreaChange, onKeyDown }, ref) => {
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
        ref={ref}
        value={value}
        onChange={onInputAreaChange}
        onKeyDown={onKeyDown}
      />
    </ConverterBase>
  )
})

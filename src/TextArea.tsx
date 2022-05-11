import {
  ChangeEventHandler,
  DetailedHTMLProps,
  forwardRef,
  TextareaHTMLAttributes,
  useState,
} from 'react'

import { Frec } from './Frec.type'

type AutoResizeTextAreaProps = {
  defaultRows?: number
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export const AutoResizeTextArea: Frec<AutoResizeTextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextAreaProps
>(({ defaultRows = 1, ...props }, ref) => {
  const [row, setRow] = useState<number>(defaultRows)
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault()
    const linesCount = `${e.target.value}\n`.match(/\n/g)?.length ?? defaultRows
    const nCount = linesCount > defaultRows ? linesCount : defaultRows
    setRow(nCount)
    // eslint-disable-next-line react/prop-types
    props.onChange?.(e)
  }
  return <textarea {...props} onChange={onChangeHandler} rows={row} ref={ref} />
})

import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  TextareaHTMLAttributes,
  useState,
} from 'react'

type AutoResizeTextAreaProps = {
  defaultRows?: number
} & Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  'rows'
>

export const AutoResizeTextArea: FC<AutoResizeTextAreaProps> = ({
  defaultRows = 1,
  ...props
}) => {
  const [row, setRow] = useState<number>(defaultRows)
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault()
    const linesCount = `${e.target.value}\n`.match(/\n/g)?.length ?? defaultRows
    const nCount = linesCount > defaultRows ? linesCount : defaultRows
    setRow(nCount)
    props.onChange?.(e)
  }
  return <textarea {...props} onChange={onChangeHandler} rows={row} />
}

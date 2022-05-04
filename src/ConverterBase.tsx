import { ChangeEventHandler, FC, ReactChild } from 'react'

const options = ['JSON', 'YAML', 'TOML'] as const

type OptionsTuple = keyof {
  [K in typeof options extends ReadonlyArray<infer U> ? U : never]: string
}

const isOptionTuple = (v: unknown): v is OptionsTuple =>
  options.includes(v as any)

type ConverterBaseProps = {
  onSelectorChange?: (v: OptionsTuple) => void
  children?: ReactChild
}

export const ConverterBase: FC<ConverterBaseProps> = ({
  onSelectorChange,
  children,
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (isOptionTuple(e.target.value)) {
      onSelectorChange?.(e.target.value)
    } else {
      throw new Error(
        `expected ${options.join(' ')},but received ${e.target.value}`,
      )
    }
  }
  return (
    <div className="p-5">
      <div className=" border-gray-400 border rounded-lg px-4 w-full">
        <div className="border-b flex items-center flex-row">
          <div className="font-roboto text-xl">
            <select className="p-4" onChange={handleChange}>
              {options.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="min-h-[16rem] p-4">{children}</div>
      </div>
    </div>
  )
}

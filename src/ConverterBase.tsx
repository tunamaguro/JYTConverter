import { FC, ReactChild } from 'react'

type ConverterBaseProps = { children: ReactChild }

export const ConverterBase: FC<ConverterBaseProps> = ({ children }) => (
  <div className="p-5">
    <div className=" border-gray-400 border rounded-lg px-4 w-full">
      <div className="border-b py-4 flex items-center flex-row">
        <div className="font-roboto text-xl">JSON</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="min-h-[16rem] p-4">{children}</div>
    </div>
  </div>
)

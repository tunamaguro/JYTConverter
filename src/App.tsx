import { ChangeEventHandler } from 'react'

import { ArrowDown, ArrowRight } from './Arrow'
import { useJYTConverter } from './ConvertActions'
import { ConverterInput } from './ConverterInput'
import { ConverterOutput } from './ConverterOutput'
import { Header } from './Header'
import { useConversionFromTo } from './SelectorProvider'

const App = () => {
  const { setInput, output } = useJYTConverter()
  const conversionFromTo = useConversionFromTo()

  const handleInput: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInput(e.target.value)
  }

  const result = output(conversionFromTo)
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <main className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <ConverterInput onInputAreaChange={handleInput} />
          </div>
          <div className="flex justify-center items-center">
            <ArrowRight className="hidden lg:block w-8 h-8 mx-4 text-gray-500" />
            <ArrowDown className="block lg:hidden w-8 h-8 my-4 text-gray-500" />
          </div>
          <div className="flex-1">
            <ConverterOutput content={result.content} error={result.error} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App

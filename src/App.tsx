import { ArrowDown, ArrowRight } from './Arrow'
import { ConverterInput } from './ConverterInput'
import { ConverterOutput } from './ConverterOutput'
import { Header } from './Header'

const App = () => (
  <>
    <Header />
    <div className="container mx-auto">
      <main className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ConverterInput />
        </div>
        <div className="flex justify-center items-center">
          <ArrowRight className="hidden lg:block w-8 h-8 mx-4 text-gray-500" />
          <ArrowDown className="block lg:hidden w-8 h-8 my-4 text-gray-500" />
        </div>
        <div className="flex-1">
          <ConverterOutput />
        </div>
      </main>
    </div>
  </>
)

export default App

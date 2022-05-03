import { ArrowDown, ArrowRight } from './Arrow'
import { Header } from './Header'

const App = () => (
  <>
    <Header />
    <div className="container mx-auto">
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-76px)] lg:min-h-[24rem]">
        <div className="flex-1 bg-red-200">Converter Input</div>
        <div className="flex justify-center items-center">
          <ArrowRight className="hidden lg:block w-8 h-8 mx-4 text-gray-500" />
          <ArrowDown className="block lg:hidden w-8 h-8 my-4 text-gray-500" />
        </div>
        <div className="bg-yellow-300 flex-1">Converter Output</div>
      </main>
    </div>
  </>
)

export default App

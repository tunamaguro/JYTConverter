import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

import { Actions } from './ConvertActions'
import { OptionsTuple } from './ConverterBase'

type State = {
  input: OptionsTuple
  output: OptionsTuple
}

const InitialState: State = {
  input: 'JSON',
  output: 'JSON',
}

type Action = {
  type: 'ChangeMode'
  input?: OptionsTuple
  output?: OptionsTuple
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ChangeMode':
      return {
        input: action.input ?? state.input,
        output: action.output ?? state.output,
      }
    default:
      return {
        input: 'JSON',
        output: 'JSON',
      }
  }
}

const SelectorContext = createContext<State>(InitialState)
const setSelectorContext = createContext<Dispatch<Action>>(() => undefined)

export const SelectorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)

  return (
    <SelectorContext.Provider value={state}>
      <setSelectorContext.Provider value={dispatch}>
        {children}
      </setSelectorContext.Provider>
    </SelectorContext.Provider>
  )
}

export const useSelectorValue = () => useContext(SelectorContext)

const ConversionFromTo: Record<
  OptionsTuple,
  Record<OptionsTuple, Actions['type']>
> = {
  JSON: {
    JSON: 'j2y',
    YAML: 'j2y',
    TOML: 'j2t',
  },
  YAML: {
    JSON: 'y2j',
    YAML: 'y2j',
    TOML: 'y2t',
  },
  TOML: {
    JSON: 't2j',
    YAML: 't2y',
    TOML: 't2j',
  },
}

export const useConversionFromTo = (): Actions['type'] => {
  const state = useSelectorValue()
  return ConversionFromTo[state.input][state.output]
}

export const useSelectorDispatch = () => useContext(setSelectorContext)

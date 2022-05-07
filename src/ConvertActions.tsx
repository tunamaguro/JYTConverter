import { useState } from 'react'

import { j2t, j2y, t2j, t2y, y2j, y2t } from './wasm'

export type State = {
  content?: string
  error?: Error
}

export const InitialState: State = {
  content: undefined,
  error: undefined,
}

export type Actions =
  | {
      type: 'j2y'
      arg: string
    }
  | {
      type: 'j2t'
      arg: string
    }
  | {
      type: 'y2j'
      arg: string
    }
  | {
      type: 'y2t'
      arg: string
    }
  | {
      type: 't2j'
      arg: string
    }
  | {
      type: 't2y'
      arg: string
    }

const formatJson = (text: string) =>
  JSON.stringify(JSON.parse(text), null, '\t')

export const actions = (action: Actions): State => {
  try {
    switch (action.type) {
      case 'j2y':
        return {
          content: j2y(action.arg),
        }
      case 'j2t':
        return {
          content: j2t(action.arg),
        }
      case 'y2j':
        return {
          content: formatJson(y2j(action.arg)),
        }

      case 'y2t':
        return {
          content: y2t(action.arg),
        }
      case 't2j':
        return {
          content: formatJson(t2j(action.arg)),
        }
      case 't2y':
        return {
          content: t2y(action.arg),
        }
      default:
        return {
          error: new Error('Unexpected Error'),
        }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error,
      }
    }
    return {
      error: new Error('Unexpected Error'),
    }
  }
}

export const useJYTConverter = () => {
  const [Input, setInput] = useState<string>()

  const output = (type: Actions['type']) =>
    Input ? actions({ type, arg: Input }) : InitialState

  return {
    setInput,
    output,
  }
}

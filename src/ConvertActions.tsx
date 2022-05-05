import { j2t, j2y, t2j, t2y, y2j, y2t } from './wasm'

export type State = {
  content?: string
  error?: Error
}

export const InitialState: State = {
  content: undefined,
  error: undefined,
}

type Actions =
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
          content: y2j(action.arg),
        }
      case 'y2t':
        return {
          content: y2t(action.arg),
        }
      case 't2j':
        return {
          content: t2j(action.arg),
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

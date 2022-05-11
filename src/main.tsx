import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { SelectorProvider } from './SelectorProvider'
import { WasmInitializer } from './wasm/initializer'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectorProvider>
      <WasmInitializer>
        <App />
      </WasmInitializer>
    </SelectorProvider>
  </React.StrictMode>,
)

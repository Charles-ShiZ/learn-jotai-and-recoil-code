import React,{createContext, Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Bpp from './Bpp'
import { RecoilRoot } from 'recoil'
import UseReducerTest from './useReducerTest'
const Context = createContext({
  getFuck: () => {
    console.log('Fuck me')
  }
})
// console.log(Context)

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    <RecoilRoot>
      <Bpp />
    </RecoilRoot>
    <Suspense fallback="123123">
      <UseReducerTest />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

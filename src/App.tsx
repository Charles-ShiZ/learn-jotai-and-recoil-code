import React, { useState,createContext } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import TableGrid from './components/TableGrid'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import { atom, useRecoilState } from 'recoil'
import Bpp from './Bpp'
import { RecoilRoot } from 'recoil'

const countAtom = atom({
  key: 'countAtom',
  default:1
})

function App() {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <div className="App">
      {/* <BrowserRouter>

          <Route path="/3">
            fuck
          </Route>
          <Route path="/1">
            2
          </Route>

      </BrowserRouter>
      <TableGrid></TableGrid> */}
      <RecoilRoot>
        <Bpp />
      </RecoilRoot>
      <button type="button" onClick={() => {setCount(+new Date())}}>
        count is: {count}
      </button>
    </div>
  )
}

export default App

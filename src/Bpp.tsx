import React, { useState,createContext } from 'react'
import ReactDOM from 'react-dom'
import { atom, useRecoilState } from 'recoil'
const bppAtom = atom({
  key: 'bppAtom',
  default:'bpp'
})


// const atom1 = atom(1)
// const atom2 = atom(2)
// const atom3 = atom(3)
// const atomD = atom((get)=>get(atom1)+get(atom2)+get(atom3))
// const a = createContext({ s: 1231 })
// console.log(a)
// window.onhashchange = (ev) => {
//   alert('234234234')
//   console.log(ev,window.location.hash)
// }

function Bpp() {
  // const [d] = useAtom(atomD)
  const [bpp, setBpp] = useRecoilState(bppAtom)
  // const [count, setCount] = useState(0)
  // const [number, setNumber] = useAtom(fuckMomenNumber)
  return (
    <div className="App">
      {bpp}
      <button onClick={()=>setBpp(String(+new Date()))}>setBpp</button>
    </div>
  )
}

export default Bpp

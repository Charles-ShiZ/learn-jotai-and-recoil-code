import {useReducer, useEffect, Suspense} from 'react'
import { atom, useAtom } from 'jotai'
const countAtom = atom(1)
/*
async (get, set) => {
  set(countAtom, await new Promise<number>((resolve, _reject) => {
    setTimeout(() => {
      resolve(+new Date())
    }, 2000)
  }))
}
*/
const count1Atom = atom(2)
const count2Atom = atom(3)

// var createSuspensePromise = (promise) => {
//   const objectToAttach = {
//     o: promise,
//     c: null
//   };
//   const suspensePromise = new Promise((resolve) => {
//     objectToAttach.c = () => {
//       objectToAttach.c = null;
//       resolve();
//     };
//     promise.then(objectToAttach.c, objectToAttach.c);
//   });
//   suspensePromise[Symbol()] = objectToAttach;
//   return suspensePromise;
// };
// const aaa = createSuspensePromise(Promise.resolve(123))

// throw aaa

export default function UseReducerTest() {
  const [count, setCount] = useAtom(countAtom)
  console.log('count', count)
  const [count1, setCount1] = useAtom(count1Atom)
  const [count2, setCount2] = useAtom(count2Atom)
  console.log('UseReducerTest 更新')
  const [state, dispatch] = useReducer((prev, action) => {
    if (Object.is(prev[1], 1) && prev[2]) {
      return prev;
    }
    return [];
  }, undefined, (initialCount) => {
    return {count: initialCount};
  });
  // throw new Promise(res => console.log())
  return (
    <>
      {count}
      <button onClick={() => {
        console.log('setCount 返回值', setCount(new Promise<number>(res => {
          setTimeout(() => {
            res(+new Date())
          }, 1000);
        })))
        dispatch(void 0)
        dispatch(void 0)
      }}>点击我更新jotai</button>
    </>
  );
}

function AAA() {
  useAtom(countAtom)
  console.log('更新')
  const [state, dispatch] = useReducer((prev) => {
    console.log(prev[1])
    if (Object.is(prev[1], 1) && prev[2]) {
      return prev;
    }
    return [];
  }, undefined, (initialCount) => {
    return {count: initialCount};
  });
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch(undefined)}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

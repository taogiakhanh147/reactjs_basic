import { useRef, useState, useEffect, useCallback, useMemo, useReducer, createContext } from 'react'
import Content from './Content'
import { type } from '@testing-library/user-event/dist/type'
import TodoApp from './Todo'
import "./App.css"
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Paragraph from './Paragraph'
import {useStore, actions} from './store'

// Bai tap 1: (UseState)
// const orders = [100, 200, 300]

// function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur)
//     console.log(total);
//     return total
//   })

//   const handleIncrease = () => {
//     setCounter(prevState => prevState + 1)
//   }

//   return (
//     <div className="App">
//       <h2>{counter}</h2>    
//       <button onClick={handleIncrease}>Increasing</button> 
//     </div>
//   );
// }

// Bai tap 2: (UseState)
// function App() {
//   const [info, setInfo] = useState({
//       name: 'Khanh',
//       age: 23
//   })

//   const handleChange = () => {
//     setInfo({
//       ...info,
//       bio: 'Dep trai'
//     })
//   }

//   return (
//     <div className="App">
//       <h2>{JSON.stringify(info)}</h2>    
//       <button onClick={handleChange}>Update</button> 
//     </div>
//   );
// }

// Bai tap 3: (UseState)
// const gifts = [
//   'DA',
//   'Thi',
//   'TA'
// ]

// function App() {
//   const [gift, setGift] = useState()

//   const handleGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }

//   return (
//     <div className="App">
//       <h2>{gift || 'Chua co phan thuong'}</h2>    
//       <button onClick={handleGift}>Lay phan thuong</button> 
//     </div>
//   );
// }



// Bai tap 4: (UseState) ve Two way binding
// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const handleRegister = () => {
//     // CALL API
//     console.log({
//       name,
//       email
//     });
//   }
//   return (
//     <div className="App">
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleRegister}>
//         Register
//       </button>
//     </div>
//   );
// }



// Bai tap 5: (UseState) ve radio
// const courses =[
//   {
//     id: 1,
//     name: 'HTML'
//   },
//   {
//     id: 2,
//     name: 'CSS'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState()

//   const handleSubmit = () => {
//     // CALL API
//     console.log({id: checked});
//   }

//   return (
//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type = "radio"
//             checked = {checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>
//         Register
//       </button>
//     </div>
//   );
// }

// Bai tap 6: UseState ve checkbox
// const courses =[
//   {
//     id: 1,
//     name: 'HTML'
//   },
//   {
//     id: 2,
//     name: 'CSS'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState([])

//   const handleChecked = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked){
//         return checked.filter(item => item !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     // CALL API
//     console.log({ids: checked});
//   }

//   return (
//     <div className="App">
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type = "checkbox"
//             checked = {checked.includes(course.id)}
//             onChange={() => handleChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>
//         Register
//       </button>
//     </div>
//   );
// }


// Bai tap 7: To do list
// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs')) || []
//     console.log(storageJobs);
//     return storageJobs
//   })

//   const handleSubmit = () => {
//     // CALL API
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div className="App">
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>
//         Add
//       </button>
//       <ul>
//         {jobs.map((job,index) => (
//           <li key={index}>
//             {job}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Bai tap 8: Mount and Unmount
// function App() {
//   const [show, setShow] = useState(false)
//   return (
//     <div className="App">
//      <button onClick={() => setShow(!show)}>Toggle</button>
//      {show && <Content />}
//     </div>
//   )
// }

// Bai tap 9: useRef() dem nguoc
// function App() {
//   const [count, setCount] = useState(60)

//   const  timerId = useRef()
//   const prevCount = useRef()
//   const h1Ref = useRef()

//   useEffect(() => {
//     prevCount.current = count
//   }, [count])

//   useEffect(() => {
//     const rect = h1Ref.current.getBoundingClientRect()
//     console.log(rect);

//   })

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1)

//     }, 1000)

//     console.log('Start ->', timerId.current);

//   }

//   const handleStop = () => {
//     clearInterval(timerId.current)

//     console.log('Stop ->', timerId.current);
//   }

//   console.log(count, prevCount.current);


//   return (
//     <div>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }

// Bai tap 10: Memo (clip 41)
// function App() {
//     const [count, setCount] = useState(0)
//     const [count2, setCount2] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//     }

//     const increase2 = () => {
//         setCount2(count2 + 1)
//     }

//     return (
//         <div>
//             <Content count = {count}/>
//             <h1>{count}</h1>
//             <h1>{count2}</h1>
//             <button onClick={increase}>Click me</button>
//             <button onClick={increase2}>Click me 2</button>
//         </div>
//     )
// }

// Bai tap 11: useCallback (clip 42)
// function App() {
//     const [count, setCount] = useState(0)

//     const handleIncrease = useCallback(() => {
//         setCount(prev => prev + 1)
//     }, [])

//     return (
//         <div>
//             <Content
//                 onIncrease = {handleIncrease}
//             />
//             <h1>{count}</h1>
//         </div>
//     )
// }

// Bai tap 12: useMemo (clip 43)
// function App() {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [products, setProducts] = useState([])

//     const nameRef = useRef()

//     const handleSubmit = () => {
//         setProducts([...products, {
//             name,
//             price: +price
//         }])
//         setName('')
//         setPrice('')
//         nameRef.current.focus()
//     }

//     const total = useMemo(() => {
//         const result = products.reduce((result, prod) => {
//             console.log('Tinh toan lai')
//             return result + prod.price
//             }, 0)
//             return result
//     }, [products])

//     return (
//         <div>
//             <input
//                 ref={nameRef}
//                 value={name}
//                 placeholder='Enter name...'
//                 onChange={e => setName(e.target.value)}
//             />
//             <br/>
//             <input
//                 value={price}
//                 placeholder='Enter price...'
//                 onChange={e => setPrice(e.target.value)}
//             />
//             <br/>
//             <button onClick={handleSubmit}>Add</button>
//             <br/>
//             Total: {total}
//             {products.map((product, index) => (
//                 <li key={index}>{product.name} - {product.price}</li>
//             ))}
//         </div>
//     )
// }

// Bai tap 13: useReducer (clip 44)
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
// const initState = 0

// // Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // Reduce
// const reduce = (state, action) => {
//     console.log('Reduce running...')
//     switch (action) {
//         case UP_ACTION:
//             return state + 1
//         case DOWN_ACTION:
//             return state - 1
//         default:
//             throw new Error("Invalid action") 
//     }
// }

// function App() {
//     const [count, dispatch] = useReducer(reduce, initState)

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button
//                 onClick={() => dispatch(DOWN_ACTION)}
//             >
//                 Down
//             </button>

//             <button
//                 onClick={() => dispatch(UP_ACTION)}
//             >
//                 Up
//             </button>
//         </div>
//     )
// }

// Bai tap 14: useReducer() ve to do app (clip 45)
// function App() {
//     return <TodoApp/>

// }

// Bai tap 15: useContext() (clip 47)
// CompA => CompB => CompC
// 1. Create context
// 2. Provider
// 3. Consumer
// function App() {
//     const context = useContext(ThemeContext)
//     return (
//         <div>
//             <button onClick={context.toggleTheme}>Toggle</button>
//             <Content />
//         </div>


//     )
// }

// Bai tap 16: Global State with Context + useReducer | Trạng thái toàn cục (clip 48) 
function App() {
    const [state, dispatch] = useStore() // useStore() là hàm chứa useContext(Context)
    const {todos, todoInput} = state
    
    const handleAdd = () => {
        dispatch(actions.add_todo_input(todoInput))
    }
    

    return (
        <div>   
            <input
                value={todoInput}
                placeholder='Enter...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    )
}

export default App
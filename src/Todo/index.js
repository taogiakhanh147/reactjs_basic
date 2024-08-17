import { useRef, useState, useEffect, useCallback, useMemo, useReducer } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'


// Bai tap 14: useReducer() ve to do app (clip 45)
function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <h3>To do</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter to do...'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
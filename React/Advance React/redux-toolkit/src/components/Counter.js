import React, { useState } from 'react'

const Counter = () => {
  const [state, setState] = useState({
    count: 0
  })

  const clickIncr = () => {
    setState({
      count: state.count + 1
    })
  }

  const clickDecr = () => {
    setState({
      count: state.count - 1
    })
  }

  const clickIncrBy = () => {
    setState({
      count: state.count + 5
    })
  }

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <p className='h3 display-3'>{state.count}</p>
                <button onClick={clickIncr} className='btn btn-success m-1'>Increment</button>
                <button onClick={clickDecr} className='btn btn-warning m-1'>Decrement</button>
                <button onClick={clickIncrBy} className='btn btn-danger m-1'>Increment by 5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Counter

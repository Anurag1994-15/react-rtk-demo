import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const numOfIcecream=useSelector((state)=>state.icecream.numoficecream)
    const dispatch=useDispatch()
  return (
    <div>
      <h2> Number of ice creams-{numOfIcecream}</h2>
      <button onClick={()=>dispatch(ordered())}>order ice cream</button>
      <button onClick={()=>dispatch(restocked(5))}>Restocke ice creams</button>
    </div>
  )
}

export default IcecreamView
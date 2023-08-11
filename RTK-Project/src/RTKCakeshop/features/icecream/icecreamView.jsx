import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {iceCreamSliceActions} from './iceCreamSlice'

const IcecreamView =() =>{
    const dispatch = useDispatch();
    const stateData = useSelector((state) =>{
        return state.icecream.numberOfIcecreams
    })

    const {ordered, reStocked} = iceCreamSliceActions;
  return (
    <>
        <h2>Number of Icecrem: {stateData}</h2>
        <button onClick= {() => dispatch(ordered())}>Order Icecream</button>
        <button onClick= {() => dispatch(reStocked(50))}>Restocked Icecream</button>
    </>
  )
}
export default IcecreamView;

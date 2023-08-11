import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {order, reStocked} from './cakeSlice'


const CakeView = () =>{
    const dispatch = useDispatch();
    const stateData = useSelector((state) =>{
        return state.cake.numberOfCakes
    })
  return (
    <>
        <h2>Number of Cakes: {stateData}</h2>
        <button onClick={() => dispatch(order())}>Order Cake</button>
        <button onClick={() => dispatch(reStocked(8))}>Restocked Cake</button>
    </>
  )
}

export default CakeView;

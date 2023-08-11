import React from "react";
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../store/slices/userSlices';
import { styled } from 'styled-components';

export const DeleteAllUser = () => {
    const dispatch = useDispatch();

    const clearAllData = () => {
        dispatch(deleteUsers())
    }
  return <Wrapper>
    <button className="btn clear-btn" onClick={() => clearAllData()}>Clear Users</button>
  </Wrapper>;
};

const Wrapper = styled.section`
    .clear-btn {
        text-transform: capitalize;
        background-color: #db338a;
        margin-top: 2rem;
    }
`

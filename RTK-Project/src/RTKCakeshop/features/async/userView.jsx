import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './user';

const UserView = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) =>{
        return state.user
    })

    useEffect(() =>{
        dispatch(fetchUsers())
    }, [])
  return (
    <>
        <h2>User Data</h2>
        {
            user.loading && <div>'loadding....'</div>
        }
        <ul>
            {
                !user.loading && user.users && user.users.map(data => {
                    return (
                        <li><span key={data.id}>{data.name}</span></li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default UserView;

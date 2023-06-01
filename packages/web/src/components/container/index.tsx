import { useEffect } from 'react'
import Board from '../modules/Board';
import Login from '../modules/Login';
import useToken from '../../hooks/useToken';

import "./styles/container.scss";

const Container = () => {
    const token = useToken()
    useEffect(() => {
        console.log(token);
    }, [token])

    return (
        <div className='container'>
            {token ? (
                <Board />
            ) : (
                <Login />
            )}
        </div>
    )
}
export default Container;
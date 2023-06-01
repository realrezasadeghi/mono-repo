import { useState } from 'react'
import Button from "../../common/Button";
import useLogin from "../../../hooks/useLogin";
import TextField from "../../common/TextField";

import "./styles/login.scss";

const Login = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const { handleLogin } = useLogin()

    return (
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__title">Register User</h1>
                <TextField label="Id" type="number" value={id} onChange={(e) => setId(e.target.value)} />
                <TextField label="Pw" type="number" value={pw} onChange={(e) => setPw(e.target.value)} />
                <Button label="Submit" onClick={() => handleLogin(id, pw)} />
            </div>
        </div>
    )
}

export default Login
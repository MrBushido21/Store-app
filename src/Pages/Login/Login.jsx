import { useContext, useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/comtext";
import { useAuth } from "../../hooks/useIsAuth";

function Login() {

const submit = (event) => {
    event.preventDefault()
}

const [isUser, setUser] = useState(true)
const navigate = useNavigate()

const addAcount = () => {
    setUser(false)
}
const login = () => {
    navigate("/store-app/main/fridge")
    setAuth(true)
    localStorage.setItem("auth", "true")
}


const {isAuth, setAuth} = useContext(Context)
if(isAuth) {
    return navigate("/store-app/main/fridge")
}

return (
    <div className="login">
        <h4>{isUser ? "Увійти" : "Реєстрація"}</h4>
        <form onSubmit={submit}>
            <input type="text" />
            <input type="password" />
            <button onClick={login}>{isUser ? "Увійти" : "Зареєструватись"}</button>
        </form>
        {isUser && <div className="registration">
             Якщо у вас не має акаунта, то ви мождете <a onClick={addAcount}>Зареєструватись</a>
        </div>}
    </div>
);
}
export default Login;
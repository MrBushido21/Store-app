import { Link } from "react-router-dom";
import "./header.css"
import { useContext, useState } from "react";
import { Context } from "../../context/comtext";

function Header() {

    const { isAuth, setAuth } = useContext(Context)
    
    let {cartCounter} = useContext(Context)

    const toogleAuth = () => {
        setAuth(!isAuth)
        localStorage.removeItem("auth")
    }

    return (
        <header className="header">
            <div className="container">
                {isAuth &&
                    <div className="header__flexrow">
                        <Link to={isAuth ? "/main/fridge" : "/login"} className="header__logo">ІнтренетМагазин</Link>
                        <div className="header__buttons">
                            <Link to="/cart" className="header__cart">Корзина: <span>{cartCounter}</span></Link>
                            <Link to="/admin" className="header__button">Адмін</Link>
                            <Link to="/login" onClick={toogleAuth} className="header__button">Вийти</Link>
                        </div>
                    </div>
                }

            </div>
        </header>
    );
}
export default Header;
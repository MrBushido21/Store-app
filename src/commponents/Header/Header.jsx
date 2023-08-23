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
                        <Link to="/store-app/main/fridge" className="header__logo">ІнтренетМагазин</Link>
                        <div className="header__buttons">
                            <Link to="/store-app/cart" className="header__cart">Корзина: <span>{cartCounter}</span></Link>
                            <Link to="/store-app/admin" className="header__button">Адмін</Link>
                            <Link to="/store-app/login" onClick={toogleAuth} className="header__button">Вийти</Link>
                        </div>
                    </div>
                }

            </div>
        </header>
    );
}
export default Header;
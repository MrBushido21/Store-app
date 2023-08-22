import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
return (
    <nav className="navbar">
        <NavLink to="fridge">Холодильники</NavLink>
        <NavLink to="phones ">Смартфони</NavLink>
        <NavLink to="leptop">Ноутбуки</NavLink>
    </nav>
);
}
export default Navbar;
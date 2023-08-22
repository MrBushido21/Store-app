// App.js
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './commponents/Footer/Footer';
import Header from './commponents/Header/Header';
import Login from './Pages/Login/Login';
import Main from './commponents/Main/Main';
import Phones from './Pages/Phone/Phone';
import Fridge from './Pages/Fridge/Fridge';
import Leptop from './Pages/Leptop/Leptop';
import Admin from './Pages/Admin/Admin';
import { useEffect, useState } from 'react';
import { Context } from './context/comtext';
import ItemPage from './Pages/ItmePage/ItemPage';
import Cart from './Pages/Cart/Cart';
import { dataFrige } from './Data/dataFridge';
import { dataPhones } from './Data/dataPhones';
import { dataLeptop } from './Data/dataLeptop';
import { useAllProducts } from './hooks/useId';

function App() {
  // ==== Авторизація
  const [isAuth, setAuth] = useState(false)

  // === Лічильник товарів у корзині, товари у корзині, грошова сума товарів у корзині
  let [cartCounter, setCartCounter] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  let [summ, setSumm] = useState(0)

  // === Зберігання стану аунтифікації на сторінці
  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setAuth(true)
    }
  }, [])

  //========================
  return (
    <Context.Provider value={{
      isAuth,
      setAuth,
      cartCounter,
      setCartCounter,
      cartItems,
      setCartItems,
      summ, 
      setSumm,
    }}>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/main' element={<Main />}>
            <Route path='phones' element={<Phones />} />
            <Route path='fridge' element={<Fridge />} />
            <Route path='leptop' element={<Leptop />} />
            <Route path='ItemPage/:id' element={<ItemPage />} />
          </Route>
            <Route path='/store-app/login' element={<Login />} />
            <Route path='/store-app/admin' element={<Admin />} />
            <Route path='/store-app/cart' element={<Cart />} />
            <Route path='/store-app' element={<Navigate to="/store-app/login" />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;

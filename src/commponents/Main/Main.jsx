import Navbar from '../Navbar/Navbar';
import './main.css';
import '../ItemCart/content.css';
import BrandList from '../../UI/BrandList';
import MyRoute from '../../routes/MyRoutes';
import { useAuth } from '../../hooks/useIsAuth';
import MyInput from '../../UI/MyInput/MyInput';
import { useContext, useState } from 'react';
import { Context } from '../../context/comtext';
import { useSortByIndicator } from '../../hooks/useFilter';

function Main() {

  useAuth("/main/fridge")

  return (
    <main>
      <div className='container'>
        {/* <MyInput inputValue={inputValue} changeInputValue={changeInputValue}/> */}
        <div className='flexrow'>
          <Navbar />
          <div className='content'>
            <div className='Items'>
              <MyRoute />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

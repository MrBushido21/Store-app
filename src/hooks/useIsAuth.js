import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/comtext"


export const useAuth = () => {
    const navigate = useNavigate()
    const {isAuth} = useContext(Context)


    useEffect((adres) => {
      
        setTimeout(() => {
          if(isAuth) {
            return navigate(adres)
          } else {
            return navigate("/store-app/login")
          }
        }, 10)
        
      }, [isAuth])
}
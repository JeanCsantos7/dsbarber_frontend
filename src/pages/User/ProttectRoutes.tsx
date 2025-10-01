import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import type { JSX } from "react"

const ProttectRoutesUser = ({children}: {children: JSX.Element}) => {

   const location = useLocation();
   const tokenUser = sessionStorage.getItem("tokenCliente");
   const rotasUser = ["/AreaCliente", "/RealizarAgendamento", "/MeusAgendamentos", "/detalhesAgendamento/:id_horas"];

    useEffect(() => {
     
       if(!rotasUser.includes(location.pathname)){
        sessionStorage.removeItem("tokenCliente");
        sessionStorage.removeItem("emailCliente");
        sessionStorage.removeItem("roleCliente");
        sessionStorage.removeItem("idCliente");
        sessionStorage.removeItem("nomeCliente");
        sessionStorage.removeItem("telefone");
       }


    }, [location.pathname])

       return tokenUser ? children : <Navigate to = "/" />

}

export default ProttectRoutesUser
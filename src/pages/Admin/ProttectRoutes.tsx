import { useLocation, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import type { JSX } from "react";


const ProttectRoutes = ({children}: {children: JSX.Element,}) => {
  const location = useLocation();
  const {id_horas} = useParams();
  const token = sessionStorage.getItem("tokenAdmin");
  const rotas = [
    "/AreaAdministrativa",
    "/CriarAgenda",
    "/MinhaAgenda",
    `/EditarHorario/${id_horas}`,
    `/detalhesAgendamento/${id_horas}`,
  ];


  useEffect(() => {
  if (!rotas.includes(location.pathname)) {
      sessionStorage.removeItem("tokenAdmin");
      sessionStorage.removeItem("emailAdmin");
      sessionStorage.removeItem("roleAdmin");
    }


  }, [location.pathname])


    return token ? children : <Navigate to="/LoginAdmin" />;

};

export default ProttectRoutes;

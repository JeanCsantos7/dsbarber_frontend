import { BrowserRouter, Route, Routes } from "react-router-dom";
import AreaCliente from "./pages/User/AreaCliente";
import RealizarAgendamento from "./pages/User/RealizarAgendamento";
import MeusAgendamentos from "./pages/User/MeusAgendamentos";
import Cadastro from "./pages/User/Cadastro";
import Home from "./pages/User/Home";
import AreaAdministrativa from "./pages/Admin/AreaAdministrativa";
import Agenda from "./pages/Admin/Agenda";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import MinhaAgenda from "./pages/Admin/MinhaAgenda";
import DetalhesAgendamentos from "./pages/Admin/detalhesAgendamento";
import EditarHorario from "./pages/Admin/EditarHorario";
import ProttectRoutes from "./pages/Admin/ProttectRoutes";
import ProttectRoutesUser from "./pages/User/ProttectRoutes";
import Erro404 from "./components/ui/Erro404";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route
          path="/AreaCliente"
          element={
            <ProttectRoutesUser>
              <AreaCliente />
            </ProttectRoutesUser>
          }
        />

        <Route
          path="/RealizarAgendamento"
          element={
            <ProttectRoutesUser>
              <RealizarAgendamento />
            </ProttectRoutesUser>
          }
        />

        <Route
          path="/MeusAgendamentos"
          element={
            <ProttectRoutesUser>
              <MeusAgendamentos />
            </ProttectRoutesUser>
          }
        />
        <Route
          path="/detalhesAgendamento/:id_horas"
          element={
            <ProttectRoutes>
              <DetalhesAgendamentos />
            </ProttectRoutes>
          }
        ></Route>

        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route
          path="/AreaAdministrativa"
          element={
            <ProttectRoutes>
              <AreaAdministrativa />
            </ProttectRoutes>
          }
        />
        <Route
          path="/CriarAgenda"
          element={
            <ProttectRoutes>
              <Agenda />
            </ProttectRoutes>
          }
        />
        <Route
          path="/MinhaAgenda"
          element={
            <ProttectRoutes>
              <MinhaAgenda />
            </ProttectRoutes>
          }
        />

        <Route
          path="/EditarHorario/:id_horas"
          element={
            <ProttectRoutes >
              <EditarHorario />
            </ProttectRoutes>
          }
        />
             <Route path="*" element={<Erro404/>}/>  
      </Routes>
  
    </BrowserRouter>
  );
};

export default Rotas;

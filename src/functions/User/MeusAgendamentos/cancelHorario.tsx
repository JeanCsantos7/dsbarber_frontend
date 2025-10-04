import axios from "axios";
import type cancelHorarioProps from "@/interface/cancelHorariosProps";
import getAgendamentos from "@/functions/User/MeusAgendamentos/getAgendamentos";
import { useState } from "react";
import type HorariosMarcados from "@/interface/horariosMarcados";

const cancelHorario = async ({ id_marcados, id_horas }: cancelHorarioProps) => {
 

  try {
     const nomeCliente = sessionStorage.getItem("nomeCliente");
  const [setResponse] = useState<HorariosMarcados[]>([]);
  const [setControlError] = useState<boolean>(false);
  const [setMessageError] = useState<string>("");
    
    const linkAPI = `https://dsbarber-backend.vercel.app/cancelHorariosUser/${id_marcados}`;
    const response = await axios.delete(linkAPI, { data: { id_horas } });
    getAgendamentos({
      nomeCliente,
      setResponse,
      setControlError,
      setMessageError,
    });
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
   
    return error;
  }
};

export default cancelHorario;

 
 import axios from "axios"; 
 import type cancelHorarioProps from "@/interface/cancelHorariosProps";

 const cancelHorario = async ({id_horas, id_marcados} : cancelHorarioProps) => {
   
    
    try {
      const linkAPI = `https://dsbarber-backend.vercel.app/cancelHorariosAdm/${id_marcados}`;
      const response = await axios.delete(linkAPI, { data: { id_horas } });
    
      return response;
    } catch (error) {
      console.error("Erro ao cancelar o agendamento:", error);
    }
  };

  export default cancelHorario
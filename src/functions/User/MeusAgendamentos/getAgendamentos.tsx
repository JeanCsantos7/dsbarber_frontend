import axios from "axios";
import type RealizarAgendamentosProps from "@/interface/RealizarAgendamentosProps";



const getAgendamentos = async ({ nomeCliente, setResponse, setControlError, setMessageError } : RealizarAgendamentosProps) => {
    try {
      const linkAPI = `https://dsbarber-backend.vercel.app/getHorariosMarcadosByName/${nomeCliente}`;
      const response = await axios.get(linkAPI);
      setResponse(response.data);
      return response;
    } catch (error: any) {
      if (error.response) {
        setTimeout(() => setControlError(false), 3500);
      }
      setControlError(true);
      setMessageError(error.response.data.message);
    }
  };

  export default getAgendamentos;
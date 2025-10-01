 import axios from "axios";
 import type Agenda from "@/interface/Agenda";
 import type HorariosMarcados from "@/interface/horariosMarcados";

 const fetchMarkedAgendamentos = async ({setHorariosMarcados} : {setHorariosMarcados: React.Dispatch<React.SetStateAction<HorariosMarcados[]>>}) => {
    try {
      const response = await axios.get("https://dsbarber-backend.vercel.app/getMarkedAgendamentos/Marcado");
      const result = response.data.map((item: Agenda) => {
        const criarData = new Date(item.data);
        const dataFormatada = criarData.toLocaleDateString("pt-br");
        return { ...item, data: dataFormatada };
      });
      setHorariosMarcados(result);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  };

  export default fetchMarkedAgendamentos;
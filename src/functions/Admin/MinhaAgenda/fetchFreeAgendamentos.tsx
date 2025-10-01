 import axios from "axios";
 import type Agenda from "@/interface/Agenda";

 const fetchFreeAgendamentos = async ({setHorariosLivres} : {setHorariosLivres: React.Dispatch<React.SetStateAction<Agenda[]>>}) => {
    try {
      const response = await axios.get("http://localhost:5000/getFreeAgendamentos/Livre");
      const result = response.data.map((item: Agenda) => {
        const criarData = new Date(item.data);
        const dataFormatada = criarData.toLocaleDateString("pt-br");
        return { ...item, data: dataFormatada };
      });
      setHorariosLivres(result);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  };

  export default fetchFreeAgendamentos;
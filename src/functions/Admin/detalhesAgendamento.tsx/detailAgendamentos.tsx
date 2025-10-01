import axios from "axios";
import type HorariosMarcados from "@/interface/horariosMarcados";
import type detailAgendamentoProps from "@/interface/detailAgendamentoProps";

const detailAgendamentos = async ({id_horas, setResponse} : detailAgendamentoProps) => {
      try {
        const linkAPI = `http://localhost:5000/detailsAgendamento/${id_horas}`;
        const response = await axios.get(linkAPI);
        const dataFormatada = response.data.map((item: HorariosMarcados) => {
          const criarData = new Date(item.data);
          const formatar = criarData.toLocaleDateString("pt-br");
          return { ...item, data: formatar };
        });

        setResponse(dataFormatada);

        return response.data;
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      }
    };


    export default detailAgendamentos;
import axios from "axios";
import type updateHorariosProps from "@/interface/updateHorariosProps";


const updateHorario = async ({ e, id_horas, novaData, novoHorario, setControlModal, navigate }: updateHorariosProps) => {
    e.preventDefault();

    try {
      const linkAPI = `https://dsbarber-backend.vercel.app/updateHorarios/${id_horas}`;
      const response = await axios.put(linkAPI, {
       data: novaData,
        horas: novoHorario,
       
      });
   
      setControlModal(true);

      setTimeout(() => {
        setControlModal(false);
        navigate("/MinhaAgenda")
      }, 2500);

      
      return response;
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao atualizar o horário!");
      }
    }
  };

  export default updateHorario;
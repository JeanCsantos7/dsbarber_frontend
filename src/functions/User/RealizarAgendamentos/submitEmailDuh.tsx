import axios from "axios";
import type submitEmailDuhProps from "@/interface/submitEmailDuhProps";

const submitEmailDuh = async ({ nomeCliente, servicos, emailCliente, datasSelecionadas, telefoneCliente }: submitEmailDuhProps) => {
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/submitEmailAdmin";
      const response = await axios.post(linkAPI, {
        name: nomeCliente,
        servico: servicos,
        email: emailCliente,
        date: datasSelecionadas,
        telefone: telefoneCliente,
      });
      return response;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  export default submitEmailDuh;
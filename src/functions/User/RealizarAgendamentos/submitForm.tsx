 
 import axios from "axios";
 import type submitFormProps from "@/interface/submitFormProps";
 import submitEmailDuh from "@/functions/User/RealizarAgendamentos/submitEmailDuh";


 const submitForm = async ({e, idHoras, nomeCliente, emailCliente, telefoneCliente, servicos, datasSelecionadas, horariosSelecionados, setShowModal, setDatasSelecionadas, setHorariosSelecionados, setServicos}: submitFormProps) => {
    

  e.preventDefault();
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/createHorariosMarcados";
      const response = await axios.post(linkAPI, {
        id_horas: idHoras,
        nomecliente: nomeCliente,
        emailcliente: emailCliente,
        telefone: telefoneCliente,
        servico: servicos,
        data: datasSelecionadas,
        hora: horariosSelecionados,
      });

      submitEmailDuh({ nomeCliente, emailCliente, telefoneCliente, servicos, datasSelecionadas });
      setShowModal(true);
      setDatasSelecionadas("");
      setHorariosSelecionados("");
      setServicos("");

      setTimeout(() => setShowModal(false), 3800);
      return response;
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        setShowModal(false);
      }
    }
  };

  export default submitForm;
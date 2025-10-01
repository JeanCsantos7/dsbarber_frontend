
import axios from "axios";
import type LoginUserProps from "@/interface/LoginUserProps";


const Logar = async ({ e, email, senha, navigate, setControlError, setMessageError } : LoginUserProps) => {
    e.preventDefault();
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/Login";
      const response = await axios.post(
        linkAPI,
        {
          email: email,
          senha: senha,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      navigate("/AreaCliente");
      const { token, id, nome, emailCliente, role, telefone } = response.data;

      sessionStorage.setItem("tokenCliente", token);
      sessionStorage.setItem("idCliente", id);
      sessionStorage.setItem("nomeCliente", nome);
      sessionStorage.setItem("roleCliente", role);
      sessionStorage.setItem("telefone", telefone);
      sessionStorage.setItem("emailCliente", emailCliente);

      return response;
    } catch (error: any) {
   
      if(error.response)
      {

        setTimeout(() => {
          setControlError(false);
        }, 4500);
            
            setControlError(true)
            setMessageError(error.response.data.message)
      }
      
    }
  };

  export default Logar;
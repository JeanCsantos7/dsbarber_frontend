import axios from "axios";
import type LoginAdminProps from "@/interface/LoginAdmin";

  const Logar = async ({e, email, senha, setMessageError, setControlError, navigate}: LoginAdminProps) => {
    e.preventDefault();
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/LoginAdmin";
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

      navigate("/AreaAdministrativa");
      const { token, emailAdmin, role,  } = response.data;
      sessionStorage.setItem("tokenAdmin", token);
      sessionStorage.setItem("emailAdmin", emailAdmin);
      sessionStorage.setItem("roleAdmin", role);
     
      return response;
    } catch (error: any) {
      if (error.response) {
        

        setMessageError(error.response.data.message);
        setControlError(true);
      } else {
        alert("Erro inesperado, tente novamente!");
      }
    }
  };

  export default Logar;
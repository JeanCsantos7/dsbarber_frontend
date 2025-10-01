 
 import axios from "axios";
import type postUsersProps from "@/interface/postUsersProps";
 
 const postUsers = ({ e, nome, email, telefone, senha, setControlarExibicao, navigate }: postUsersProps) => {


    try {
          e.preventDefault();
      
      const linkAPI = "https://dsbarber-backend.vercel.app/createUsers";
      const data = axios.post(linkAPI, {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
        role: "user",
      });

    
      

       setControlarExibicao(true);
      
        
    

       setTimeout(() => {
       navigate("/");
       }, 6500);
     return data
     
    } 
    
    
    catch (error: any) {
     alert("okl")
 console.log("ta errado")
      setControlarExibicao(false);
    }
  };

  export default postUsers;
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { TiCancel } from "react-icons/ti";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type ModalCancelAdmProps from "@/interface/ModalCancelAdm";



export function ModalCancelAdm({nomecliente, emailcliente, data, horas, confirmDelete, id_marcados, id_horas }: ModalCancelAdmProps) {

  const[mensagem, setMensagem] = useState<string>("")
  const navigate = useNavigate();

  
  
  
  const submitEmailCancelAdmin = async() => {
   


 if (!mensagem.trim()) {
    alert("Por favor, digite o motivo do cancelamento.");
    return; 
  }


    try {
       const linkAPI = `http://localhost:5000/submitEmailCancelAdm`
       const response = await axios.post(linkAPI, {
        nomecliente,
        emailcliente,
        data,
        horas,
        mensagem
       })
       
       confirmDelete(id_marcados, id_horas)

       navigate("/AreaAdministrativa");
     
       return response
      
    } catch (error: any) {
        if(error.response){
          alert(error.response.data.message)
        } 

    }

  }




        


   

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="w-full flex items-center justify-center gap-2 
            bg-red-500 hover:bg-[#941414] text-white font-medium 
            px-5 py-3 rounded-xl shadow-md transition-colors"
     
        >
          <TiCancel />
          Cancelar Agendamento
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#528a14] font-semibold text-xl">
            Tem certeza que deseja cancelar esse horário?
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2">
            Digite o motivo do cancelamento:
            <form action="">
<textarea
              name="motivo"
              required
              id="motivo-cancelamento"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Motivo do cancelamento"
              className="w-full h-24 mt-2 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#528a14]"
            />
            </form>
            
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 text-black">
            Sair
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => submitEmailCancelAdmin()}
            className="bg-red-500 font-semibold hover:bg-red-600 text-white"
          >
            Confirmar cancelamento
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ModalCancelAdm;
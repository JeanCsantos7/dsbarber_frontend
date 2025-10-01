import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import axios from "axios";
import { TiCancel } from "react-icons/ti";
import type ModalCancelUserProps from "@/interface/modalCancelUserProps";




export function ModalCancelUser({ confirmDelete, nomecliente, emailcliente, data, hora, id_marcados, id_horas }: ModalCancelUserProps) {


     const submitEmailCancelUser = async() => {
    
    try {
     confirmDelete(id_marcados, id_horas)
      const linkAPI = `http://localhost:5000/submitEmailCancelUser`
      const response = await axios.post(linkAPI, {
        emailcliente,
        nomecliente,
        data,
        hora
      });

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
         
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 text-black">
            Sair
          </AlertDialogCancel>
          <AlertDialogAction
             onClick={() => submitEmailCancelUser()}
            className="bg-red-500 font-semibold hover:bg-red-600 text-white"
          >
            Confirmar cancelamento
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ModalCancelUser;
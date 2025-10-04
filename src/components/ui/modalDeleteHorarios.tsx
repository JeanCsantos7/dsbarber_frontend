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

import {FaTrash } from "react-icons/fa";


interface ModalDeleteHorariosProps {
 
  
    id_marcados: number;
    id_horas: number;
    fetchFreeAgendamentos: () => void;
}

export function ModalDeleteHorarios({  id_horas, fetchFreeAgendamentos }: ModalDeleteHorariosProps) {

  



    const deleteHorario = async() => {

        try {
            const linkAPI = `https://dsbarber-backend.vercel.app/deleteAgendamento/${id_horas}`;
               const response = await axios.delete(linkAPI)
      
            fetchFreeAgendamentos()

            return response
     
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message)
            }
        }
    }


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="text-red-500 transition-colors" >
                    <FaTrash />
                  </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#528a14] font-semibold text-xl">
            Tem certeza que deseja apagar esse horário?
          </AlertDialogTitle>
         
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 text-black">
            Sair
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteHorario()}
            className="bg-red-500 font-semibold hover:bg-red-600 text-white"
          >
            Confirmar deleção
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ModalDeleteHorarios;
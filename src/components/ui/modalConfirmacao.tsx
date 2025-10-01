import { FaRegCircleCheck } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
 



const ModalConfirmacao = () => {
    const location = useLocation();

  
   
    
    return (
        <div className="grid w-full max-w-xl items-start gap-4 mt-[6.5%]" >
            <Alert className="bg-[#528a14] flex items-center gap-4 p-9">
                <span className="text-[#fff] text-lg bg-[#406b10] flex items-center justify-center rounded-full p-2">
                    <FaRegCircleCheck />
                </span>
                <div className="flex flex-col">
                    <AlertTitle className="text-[#ffffff] font-semibold ">
                       {location.pathname === "/Cadastro" ? "Conta criada com sucesso!" : "Horário Cadastrado com sucesso!" } 
                    </AlertTitle>
                    <AlertDescription className="text-[#ffffff]">
                        
                        {location.pathname === "/Cadastro" ? "   Você será redirecionado para a página de login em breve." : "Cadastre outros horários ou volte para cadastrar uma nova data" } 
                     
                    </AlertDescription>
                </div>
            </Alert>
        </div>
    )
}

export default ModalConfirmacao;

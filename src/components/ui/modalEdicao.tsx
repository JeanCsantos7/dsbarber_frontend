import { FaRegCircleCheck } from "react-icons/fa6";


import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
 



const ModalEdicao = () => {


  
   
    
    return (
        <div className="grid w-full max-w-xl items-start gap-4 mt-[6.5%] p-4" >
            <Alert className="bg-[#528a14] flex items-center gap-4 p-9">
                <span className="text-[#fff] text-lg bg-[#406b10] flex items-center justify-center rounded-full p-2">
                    <FaRegCircleCheck />
                </span>
                <div className="flex flex-col">
                    <AlertTitle className="text-[#ffffff] font-semibold ">
                        Horário editado!
                    </AlertTitle>
                    <AlertDescription className="text-[#ffffff]">
                        
                         As alterações realizadas foram salvas com sucesso!
                     
                    </AlertDescription>
                </div>
            </Alert>
        </div>
    )
}

export default ModalEdicao;


import HeaderAdm from "@/components/ui/headerAdm"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { horarios } from "@/interface/horarios";
import updateHorario from "@/functions/Admin/EditarHorario/updateHorario";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import ModalEdicao from "@/components/ui/modalEdicao";



const EditarHorario = () => {
  const navigate = useNavigate();
  const [novoHorario, setNovoHorario] = useState("");
  const [controlModal, setControlModal] = useState(false);
  const [novaData, setNovaData] = useState("");
  const { id_horas } = useParams();

  

  return (
    <>
      <HeaderAdm />


      <div className="bg-[#2c2c2c] shadow-md w-full min-h-[14vh] flex items-center justify-center px-6">
        <h1 className="font-semibold text-2xl text-white">
          Editar Data e Horário
        </h1>
      </div>

      
      <div className="max-w-2xl mx-auto px-6 py-6 text-center">
        <p className="text-base leading-relaxed text-gray-300">
          Aqui você pode modificar a data e o horário de um agendamento.
        </p>
      </div>


      <div className="lg:max-w-md lg:m-auto  bg-[#1e1e1e] shadow-lg rounded-2xl p-8 m-3.5 border border-[#2f2f2f]">
        <form onSubmit={(e) => updateHorario({ e, id_horas, novaData, novoHorario, setControlModal, navigate })} className="grid gap-6">
       
          <div className="grid gap-2">
            <Label className="text-sm text-gray-200">Data</Label>
            <Input
              type="date"
              value={novaData}
              onChange={(e) => setNovaData(e.target.value)}
              className="text-white border border-[#528a14] rounded-lg p-3 bg-transparent focus:ring-2 focus:ring-[#528a14]"
              required
            />
          </div>

 
          <div className="grid gap-2">
            <Label className="text-sm text-gray-200">Horário</Label>
            <Select
              value={novoHorario}
              onValueChange={(value) => setNovoHorario(value)}
              required
            >
              <SelectTrigger className="w-full border border-[#528a14] rounded-lg bg-transparent text-white focus:ring-2 focus:ring-[#528a14]">
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Horários</SelectLabel>
                  {horarios.map((item) => (
                    <SelectItem key={item.id} value={item.horario}>
                      {item.horario}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="bg-[#528a14] w-full text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#8ece49] transition-all duration-300 ease-in-out"
          >
            Editar
          </Button>
          {
            controlModal && <ModalEdicao />
          }
        </form>
      </div>
    </>
  );
};

export default EditarHorario;

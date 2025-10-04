import HeaderAdm from "@/components/ui/headerAdm";
import { horarios } from "@/interface/horarios";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import ModalConfirmacao from "@/components/ui/modalConfirmacao";
import { Button } from "@/components/ui/button";
import voltar from "@/functions/Admin/Agenda/voltar";
import submitHorarios from "@/functions/Admin/Agenda/submitHorarios";
import submitDatas from "@/functions/Admin/Agenda/SubmitDatas";

const Agenda = () => {
  const [datasSelecionadas, setDatasSelecionadas] = useState<string>("");
  const [horariosSelecionados, setHorariosSelecionados] = useState<string>("");
  const [submitData, setSubmitData] = useState<boolean>(true);
  const [submitHorario, setSubmitHorario] = useState<boolean>(false);
  const [mostrarModal, setMostrarModal] = useState<boolean>(false);
  const id_data = sessionStorage.getItem("id_datas");
  const navigate = useNavigate();

  return (
    <>
      <HeaderAdm />

      <div className="bg-[#2c2c2c] shadow-md w-full min-h-[14vh] flex items-center px-6">
        <h1 className="font-semibold text-2xl text-white">
          Realizar Agendamento
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-6">
        <p className="text-base leading-relaxed text-gray-200 text-center">
          Aqui você pode realizar agendamentos de serviços de corte e barba.
        </p>
      </div>

      {submitData && (
        <form
          method="POST"
          onSubmit={(e) =>
            submitDatas({
              e,
              setSubmitData,
              setSubmitHorario,
              setDatasSelecionadas,
              datasSelecionadas
             
            })
          }
          className="max-w-2xl mx-auto px-6"
        >
          <div className="bg-[#1e1e1e] h-full %] shadow-lg rounded-2xl p-8 grid gap-6 border border-[#2f2f2f]">
            <div className="grid gap-2 w-full">
              <Label className="text-sm text-gray-200">Data</Label>
              <Input
                type="date"
                value={datasSelecionadas}
            
                onChange={(e) => setDatasSelecionadas(e.target.value)}
                className="text-white border border-[#528a14] rounded-lg p-3 bg-transparent focus:ring-2 focus:ring-[#528a14]"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#528a14] w-full sm:w-1/2 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#8ece49] transition-all duration-300 ease-in-out"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      )}

      {submitHorario && (
        <form
          method="POST"
          onSubmit={(e) =>
            submitHorarios({
              e,
              horariosSelecionados,
              id_data,
              setMostrarModal,
              setHorariosSelecionados,
              navigate,
            })
          }
          className="max-w-2xl mx-auto px-6"
        >
          <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 grid gap-8 border border-[#2f2f2f]">
            <div className="grid gap-3">
              <Label className="text-sm text-gray-200">
                Horário (Cadastrar todos horários do dia)
              </Label>
              <Select
                value={horariosSelecionados}
                onValueChange={(value) => setHorariosSelecionados(value)}
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                type="submit"
                className="bg-[#528a14] w-full sm:w-1/2 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#8ece49] transition-all duration-300 ease-in-out"
              >
                Enviar
              </Button>

              <Button
                onClick={() =>
                  voltar({
                    navigate,
                    setSubmitHorario,
                    setSubmitData,
                    setHorariosSelecionados,
                  })
                }
                className="bg-[#be2828] w-full sm:w-1/2 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 ease-in-out"
              >
                Voltar
              </Button>
            </div>
          </div>

          {mostrarModal && <ModalConfirmacao />}
        </form>
      )}
    </>
  );
};

export default Agenda;

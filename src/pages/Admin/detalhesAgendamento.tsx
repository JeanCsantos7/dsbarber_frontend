import HeaderAdm from "@/components/ui/headerAdm"
import {
  MdOutlineWhatsapp,
  MdDateRange,
  MdAccessTime,
  MdWork,
} from "react-icons/md";
import ModalCancelAdm from "@/components/ui/modalCancelAdm";
import type HorariosMarcados from "@/interface/horariosMarcados";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import cancelHorario from "@/functions/Admin/detalhesAgendamento.tsx/cancelHorario";
import detailAgendamentos from "@/functions/Admin/detalhesAgendamento.tsx/detailAgendamentos";

const DetalhesAgendamentos = () => {
  const { id_horas } = useParams();
  const [response, setResponse] = useState<HorariosMarcados[]>([]);





  
  useEffect(() => {
    

    detailAgendamentos({id_horas, setResponse});
  }, [id_horas]);

  return (
    <>
      <HeaderAdm />
      <div className="m-auto mt-6 px-6 flex flex-col gap-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-lg">
          Detalhes do Agendamento
        </h1>

        {response.map((item) => (
          <div
            key={item.id_marcados}
            className="w-full flex flex-col bg-gradient-to-br from-[#2c2c2c] to-[#1e1e1e] rounded-2xl shadow-lg p-8 gap-6 border border-[#528a14] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-white">
                {item.nomecliente}
              </h2>

              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#528a14] text-lg">
                  <MdWork />
                </span>
                <span className="text-base">{item.servico}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#528a14] text-lg">
                  <MdDateRange />
                </span>

                <span className="text-base">{item.data}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-[#528a14] text-lg">
                  <MdAccessTime />
                </span>

                <span className="text-base">{item.horas}</span>
              </div>
            </div>

            <a
              href={`https://api.whatsapp.com/send?phone=${"55" + item.telefone}`}
              className="flex items-center justify-center gap-2 bg-[#528a14] hover:bg-[#486627] text-white font-medium px-5 py-3 rounded-xl shadow-md transition-colors"
            >
              <span className="text-xl">
                <MdOutlineWhatsapp />
              </span>
              Entrar em contato
            </a>

            <div className="flex justify-end gap-4 text-red-500">
              <ModalCancelAdm
                nomecliente={item.nomecliente}
                emailcliente={item.emailcliente}
                data={item.data}
                horas={item.horas}
                id_marcados={item.id_marcados}
                id_horas={item.id_horas}
                confirmDelete={() => cancelHorario({id_horas: item.id_horas, id_marcados: item.id_marcados})}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetalhesAgendamentos;

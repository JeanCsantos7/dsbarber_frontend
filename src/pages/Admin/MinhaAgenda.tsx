import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { TbClockHour5 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import HeaderAdm from "@/components/ui/headerAdm";
import ModalDeleteHorarios from "@/components/ui/modalDeleteHorarios";

import type Agenda from "@/interface/Agenda";
import type HorariosMarcados from "@/interface/horariosMarcados";
import fetchFreeAgendamentos from "@/functions/Admin/MinhaAgenda/fetchFreeAgendamentos";
import fetchMarkedAgendamentos from "@/functions/Admin/MinhaAgenda/fetchMarkedAgendamentos";

const MinhaAgenda = () => {
  const [horariosLivres, setHorariosLivres] = useState<Agenda[]>([]);
  const [horariosMarcados, setHorariosMarcados] = useState<HorariosMarcados[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFreeAgendamentos({ setHorariosLivres });
    fetchMarkedAgendamentos({ setHorariosMarcados });
  }, []);

  return (
    <>
      <HeaderAdm />

      <div className="bg-[#2c2c2c] shadow-md w-full min-h-[14vh] flex items-center px-6 sm:px-12 lg:px-24">
        <h1 className="font-semibold text-2xl sm:text-3xl text-white">Lista de Agendamentos</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 mt-10 rounded-3xl shadow-2xl bg-[#1b1b1b]">
   
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center border-b border-gray-700 pb-4">
          Horários Disponíveis
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {horariosLivres.length === 0 ? (
            <p className="text-center text-gray-300 font-medium col-span-full">
              Não há horários disponíveis no momento
            </p>
          ) : (
            horariosLivres.map((agendamento) => (
              <div
                key={agendamento.id_data}
                className="flex flex-col bg-[#2f2f2f] rounded-3xl shadow-lg p-6 sm:p-8 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 min-h-[180px]"
              >
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => navigate(`/EditarHorario/${agendamento.id_horas}`)}
                    className="text-[#528a14] hover:text-white transition-colors text-lg"
                  >
                    <FaPen />
                  </button>
                  <ModalDeleteHorarios
                    fetchFreeAgendamentos={() => fetchFreeAgendamentos({ setHorariosLivres })}
                    id_marcados={agendamento.id_marcados}
                    id_horas={agendamento.id_horas}
                  />
                </div>

                <div className="flex flex-col items-center gap-3 text-white mt-2">
                  <div className="flex items-center gap-2 text-[#528a14] text-lg font-medium">
                    <IoMdCalendar  />
                    <span className="text-white">{agendamento.data}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#528a14] text-lg font-medium">
                    <TbClockHour5  />
                    <span className="text-white">{agendamento.horas}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


        <h1 className="text-white text-2xl sm:text-3xl font-bold mt-16 text-center border-b border-gray-700 pb-4">
          Horários Marcados
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {horariosMarcados.length === 0 ? (
            <p className="text-center text-gray-300 font-medium col-span-full">
              Não há horários agendados no momento!
            </p>
          ) : (
            horariosMarcados.map((agendamento: HorariosMarcados) => (
              <div
                key={agendamento.id_horas}
                className="flex flex-col bg-[#2f2f2f] rounded-3xl shadow-lg p-6 sm:p-8 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 min-h-[200px]"
              >
                <div className="flex flex-col items-center gap-3 text-white">
                  <div className="flex items-center gap-2 text-[#528a14] text-lg font-medium">
                    <IoMdCalendar  />
                    <span className="text-white">{agendamento.data}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#528a14] text-lg font-medium">
                    <TbClockHour5  />
                    <span className="text-white">{agendamento.horas}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/detalhesAgendamento/${agendamento.id_horas}`)}
                    className="mt-4 p-3 sm:p-4 w-full bg-[#528a14] hover:bg-[#171a14] rounded-lg text-white font-semibold transition-colors"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MinhaAgenda;

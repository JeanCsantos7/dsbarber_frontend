import Header from "@/components/ui/header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoMdCalendar } from "react-icons/io";
import { TbClockHour10Filled } from "react-icons/tb";
import fotoDuh from "../../assets/fotoDuh.png.jpg";
import { Button } from "@/components/ui/button";
import type HorariosMarcados from "@/interface/horariosMarcados";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalCancelUser from "@/components/ui/modalCancelUser";

const MeusAgendamentos = () => {
  const nomeCliente = sessionStorage.getItem("nomeCliente");
  const [response, setResponse] = useState<HorariosMarcados[]>([]);
  const [controlError, setControlError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>("");

  const navigate = useNavigate();

  const getAgendamentos = async () => {
    try {
      const linkAPI = `http://localhost:5000/getHorariosMarcadosByName/${nomeCliente}`;
      const response = await axios.get(linkAPI);
      setResponse(response.data);
      return response;
    } catch (error: any) {
      if (error.response) {
        setTimeout(() => setControlError(false), 3500);
      }
      setControlError(true);
      setMessageError(error.response.data.message);
    }
  };

  const cancelHorario = async (id_marcados: number, id_horas: number) => {
    try {
      const linkAPI = `http://localhost:5000/cancelHorariosUser/${id_marcados}`;
      const response = await axios.delete(linkAPI, { data: { id_horas } });
      getAgendamentos();
      return response;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getAgendamentos();
  }, [nomeCliente]);

  return (
    <>
      <Header />

      <div className="bg-[#2c2c2c] shadow-md w-full min-h-[14vh] text-white px-6 sm:px-12 lg:px-24 py-6 flex items-center">
        <h1 className="font-semibold text-2xl sm:text-3xl">Meus Agendamentos</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <p className="text-sm sm:text-base leading-relaxed text-[#fff] lg:text-center">
          Aqui você pode visualizar seus agendamentos de serviços de corte e barba.
        </p>
      </div>

      {response.length === 0 ? (
        <div className="max-w-md mx-auto p-6 text-center">
          <p className="text-[#fff] mb-6">
            Você ainda não possui horários agendados. Vá até a sessão de agendamentos para marcar um horário.
          </p>
          <Button
            type="submit"
            onClick={() => navigate("/RealizarAgendamento")}
            className="w-full sm:w-auto bg-[#528a14] text-white font-semibold hover:bg-[#8ece49] transition-colors duration-700 ease-in-out"
          >
            Agendamentos
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 px-4 sm:px-8 lg:px-16">
          {response.map((item) => (
            <div
              key={item.id_horas}
              className="bg-[#2c2c2c] rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mx-auto max-w-md sm:max-w-2xl"
            >
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-[#528a14] mx-auto sm:mx-0 flex-shrink-0">
                <AvatarImage src={fotoDuh} alt={`Foto do Duh`} />
              </Avatar>

              <div className="flex flex-col gap-3 text-white w-full">
                <h3 className="text-lg sm:text-xl font-semibold">Duh</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.servico}</p>

                <div className="flex flex-wrap items-center gap-3 text-sm mt-2">
                  <div className="flex items-center gap-2 bg-[#747474] px-3 py-1 text-lg sm:text-xl rounded text-white">
                    <IoMdCalendar  />
                    <span>{item.data}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#747474] px-3 py-1 rounded text-lg sm:text-xl text-white">
                    <TbClockHour10Filled  />
                    <span>{item.hora}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <ModalCancelUser
                    nomecliente={item.nomecliente}
                    emailcliente={item.emailcliente}
                    data={item.data}
                    hora={item.hora}
                    id_marcados={item.id_marcados}
                    id_horas={item.id_horas}
                    confirmDelete={cancelHorario}
                  />

                  <a
                    href="https://api.whatsapp.com/send/?phone=5577991723061&text&type=phone_number&app_absent=0"
                    className="bg-[#528a14] text-center hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors w-full sm:w-auto"
                  >
                    Entrar em contato
                  </a>
                </div>
              </div>

              {controlError && (
                <p className="text-red-500 text-sm sm:text-base mt-2">{messageError}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MeusAgendamentos;

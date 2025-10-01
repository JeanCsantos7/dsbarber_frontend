import Header from "@/components/ui/header";
import { MdEditCalendar } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AreaCliente = () => {
  const navigate = useNavigate();
  const nome = sessionStorage.getItem("nomeCliente");

  return (
    <div className="min-h-screen flex flex-col bg-[#1b1b1b]">
      <Header />

      <main className="flex flex-col items-center flex-1 px-4 sm:px-6 lg:px-10">
        <p className="text-center text-[#ffffff] font-bold text-2xl mt-12">
          Bem-vindo, {nome}
        </p>

        <p className="text-[#e0e0e0] text-sm sm:text-base text-center max-w-2xl mt-4">
          Aqui você pode realizar novos agendamentos ou visualizar os seus
          horários já marcados de forma rápida e prática.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 w-full max-w-4xl">
          <Card
            onClick={() => navigate("/RealizarAgendamento")}
            className="cursor-pointer bg-[#528a14] hover:bg-[#6bb41f] transition-all duration-300 rounded-2xl shadow-lg shadow-[#528a14]/40 flex items-center justify-center"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-white text-6xl">
              <MdEditCalendar  />
              <p className="text-lg sm:text-xl font-medium mt-4">
                Realizar Agendamentos
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/MeusAgendamentos")}
            className="cursor-pointer bg-[#528a14] hover:bg-[#6bb41f] transition-all duration-300 rounded-2xl shadow-lg shadow-[#528a14]/40 flex items-center justify-center"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-white text-6xl">
              <FaCalendarCheck />
              <p className="text-lg sm:text-xl font-medium mt-4">
                Meus Agendamentos
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AreaCliente;

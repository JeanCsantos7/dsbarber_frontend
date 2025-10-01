import HeaderAdm from "@/components/ui/headerAdm"
import { MdEditCalendar } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

const AreaAdministrativa = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col">
      <HeaderAdm />

      <main className="flex flex-col flex-1 px-4 py-8 items-center">
        <p className="text-center text-white font-bold text-2xl sm:text-3xl mt-8">
          Bem-vindo, Duh
        </p>

        <p className="text-white text-sm sm:text-base text-justify mt-4 max-w-2xl">
          Aqui nessa sessão será possível realizar a criação da sua agenda de
          horários e verificar/controlar os agendamentos realizados.
        </p>

        <div className="grid gap-8 mt-10 w-full max-w-4xl sm:grid-cols-2">

          <Card
            className="cursor-pointer h-[22vh] sm:h-[28vh] flex items-center justify-center shadow-lg shadow-[#528a14] bg-[#528a14] hover:scale-105 transition-transform"
            onClick={() => navigate("/CriarAgenda")}
          >
            <CardContent className="flex flex-col items-center justify-center text-white text-5xl sm:text-6xl">
              <MdEditCalendar />
              <p className="text-lg sm:text-xl font-medium mt-3">Criar Horários</p>
            </CardContent>
          </Card>

         
          <Card
            className="cursor-pointer h-[22vh] sm:h-[28vh] flex items-center justify-center shadow-lg shadow-[#528a14] bg-[#528a14] hover:scale-105 transition-transform"
            onClick={() => navigate("/MinhaAgenda")}
          >
            <CardContent className="flex flex-col items-center justify-center text-white text-5xl sm:text-6xl">
              <FaCalendarCheck />
              <p className="text-lg sm:text-xl font-medium mt-3">Minha Agenda</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default AreaAdministrativa

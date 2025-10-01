import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import TelaLogout from "@/components/ui/telaLogout";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const MenuLateral = () => {
  const navigate = useNavigate();
  const [controlLogout, setControlLogout] = useState<boolean>(false);



  const Sair = () => {
    setControlLogout(true);

    setTimeout(() => {
      setControlLogout(false);
      sessionStorage.removeItem("tokenCliente");
      sessionStorage.removeItem("emailCliente");
      sessionStorage.removeItem("roleCliente");
      sessionStorage.removeItem("idCliente");
      sessionStorage.removeItem("nomeCliente");
      sessionStorage.removeItem("telefone");

      navigate("/");
    }, 4700);
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="outline-none bg-amber-800">
        <Button
          variant="outline"
          className="text-[#fff] bg-[#528a14] m-2.5 border-none font-bold text-8xl"
        >
          {<HiMenuAlt3 />}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#528a14] shadow-sm shadow-black border-none outline-none">
        <SheetHeader className="mt-[55%]"></SheetHeader>
        <div className="grid  flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3 text-center">
            <a
              href="#"
              className="text-center text-[16px] text-[#fff]"
              onClick={() => navigate("/AreaCliente")}
            >
              Ínicio
            </a>
          </div>

          <div className="grid gap-3 text-center">
            <a
              href="#"
              className="text-center text-[16px] text-[#fff]"
              onClick={() => navigate("/RealizarAgendamento")}
            >
              Realizar Agendamentos
            </a>
          </div>

          <div className="grid gap-3">
            <a
              href="#"
              className="text-center text-[16px] text-[#fff]"
              onClick={() => navigate("/MeusAgendamentos")}
            >
              Meus Agendamentos
            </a>
          </div>

          <div className="grid gap-3">
            <a
              href="#"
              className="text-center text-[16px] text-[#fff]"
              onClick={() => Sair()}
            >
              Sair
            </a>
          </div>
        </div>
        {controlLogout && <TelaLogout />}
      </SheetContent>
    </Sheet>
  );
};

export default MenuLateral;

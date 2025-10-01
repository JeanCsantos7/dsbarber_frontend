import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";






const Erro404 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[rgb(20,20,20)] text-white px-6">
  
      <div className="flex items-center gap-3 mb-6">
        <Scissors className="w-12 h-12 text-[#528a14]" />
        <h1 className="text-5xl font-extrabold text-[#528a14]">404</h1>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Ops! Corte errado...</h2>
      <p className="text-gray-400 text-center max-w-md mb-8">
        Parece que essa página não está no nosso agendamento.  
        Volte para o início e escolha um novo estilo ✂️
      </p>

     
      <Link
        to="/"
        className="bg-[#528a14] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#6cb41f] transition-all duration-300"
      >
        Voltar para a barbearia
      </Link>
    </div>
  );
};

export default Erro404;

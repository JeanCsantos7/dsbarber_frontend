import type HorariosMarcados from "./horariosMarcados";

export default interface RealizarAgendamentosProps{
    nomeCliente: string | null;
    setResponse: React.Dispatch<React.SetStateAction<HorariosMarcados[]>>;
    setControlError: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageError: React.Dispatch<React.SetStateAction<string>>;
}
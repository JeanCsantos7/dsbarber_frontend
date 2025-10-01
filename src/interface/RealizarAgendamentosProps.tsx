import type HorariosMarcados from "./horariosMarcados";

export default interface RealizarAgendamentosProps{
    nomeCliente: string | null;
    setResponse: React.Dispatch<React.SetStateAction<HorariosMarcados[]>> | any;
    setControlError: React.Dispatch<React.SetStateAction<boolean>> | any;
    setMessageError: React.Dispatch<React.SetStateAction<string>> | any;
}
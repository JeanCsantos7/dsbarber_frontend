import type HorariosMarcados from "./horariosMarcados";

export default interface detailAgendamentoProps {
    id_horas: number | any;
    setResponse: React.Dispatch<React.SetStateAction<HorariosMarcados[]>>;
}
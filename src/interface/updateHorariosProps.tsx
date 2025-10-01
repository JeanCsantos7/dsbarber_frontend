

export default interface updateHorariosProps{
 e: React.FormEvent;
    id_horas: number | any ;
    novaData: string;
    novoHorario: string;
    navigate : (path: string) => void;
    setControlModal: React.Dispatch<React.SetStateAction<boolean>>;
   

}


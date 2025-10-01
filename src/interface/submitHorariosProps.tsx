 export default interface submitHorariosProps {
    horariosSelecionados: string,
    id_data: string | null,
    setMostrarModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHorariosSelecionados: React.Dispatch<React.SetStateAction<string>>,
    navigate: (path: string) => void
    e: React.FormEvent,
 }
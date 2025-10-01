 export default interface VoltarProps {
    setSubmitHorario: React.Dispatch<React.SetStateAction<boolean>>,
    setSubmitData: React.Dispatch<React.SetStateAction<boolean>>,
    setHorariosSelecionados: React.Dispatch<React.SetStateAction<string>>
    navigate: (rota: string) => void
  }
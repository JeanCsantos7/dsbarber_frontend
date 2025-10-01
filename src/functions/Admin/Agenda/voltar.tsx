

import type VoltarProps from "@/interface/VoltarProps"

 const voltar = ({ navigate, setSubmitHorario, setSubmitData, setHorariosSelecionados} : VoltarProps) => {
   
    navigate("/CriarAgenda")
    setSubmitHorario(false)
    setSubmitData(true)
    setHorariosSelecionados("")
  }

  export default voltar
 import axios from "axios"
import type submitHorariosProps from "@/interface/submitHorariosProps"


 const submitHorarios = async ( {e, horariosSelecionados, id_data, setMostrarModal, setHorariosSelecionados, navigate}: submitHorariosProps) => {
    e.preventDefault()
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/createHours"
      const horas = await axios.post(linkAPI, {
        horas: horariosSelecionados,
        id_data: id_data,
      })
      sessionStorage.setItem("id_horas", horas.data.id_horas)
      setMostrarModal(true)
      setHorariosSelecionados("")
      setTimeout(() => {
        setMostrarModal(false)
        navigate("/CriarAgenda")
      }, 2000)
      return horas
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      }
    }
  }

  export default submitHorarios
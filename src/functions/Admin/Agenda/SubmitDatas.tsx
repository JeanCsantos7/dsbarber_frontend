 import axios from "axios"
import type submitDatasProps from "@/interface/submitDatasProps"

 
 const submitDatas = async ({e, setSubmitData, setSubmitHorario, setDatasSelecionadas, datasSelecionadas} : submitDatasProps) => {
    e.preventDefault()
    
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/createDate"
      const data = await axios.post(linkAPI, { data: datasSelecionadas })
     
      setSubmitData(false)
      setSubmitHorario(true)
      setDatasSelecionadas("")
      return data
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      }
    }
  }

  export default submitDatas

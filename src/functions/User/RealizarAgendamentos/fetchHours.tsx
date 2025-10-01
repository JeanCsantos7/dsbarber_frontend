  
  import axios from "axios";
 import type fetchHoursProps from "@/interface/fetchHoursProps";

  
  const fetchHours = async ({setHoras, setIdData, id_data} : fetchHoursProps) => {
    try {
      const linkAPI = `https://dsbarber-backend.vercel.app/getAgendamentosById/${id_data}/Livre`;
      const response = await axios.get(linkAPI);
      setHoras(response.data);
      setIdData(id_data);
    } catch (error: any) {
      if (error.response) alert(error.response.data.message);
    }
  };

  export default fetchHours;
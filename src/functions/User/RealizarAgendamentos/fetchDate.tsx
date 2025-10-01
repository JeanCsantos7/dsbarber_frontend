import axios from "axios";
import type fetchDateProps from "@/interface/fetchDateProps";
import type Datas from "@/interface/datas";

const fetchDate = async ({setDatas}: fetchDateProps) => {
    try {
      const linkAPI = "https://dsbarber-backend.vercel.app/getFreeDates";
      const response = await axios.get(linkAPI);

      const formatacaoDatas = response.data.map((item: Datas) => {
        const novaData = new Date(item.data);
        const dataFormatada = novaData.toLocaleDateString("pt-br");
        return { ...item, data: dataFormatada };
      });

      setDatas(formatacaoDatas);
    } catch (error: any) {
      if (error.response) {
        setDatas([]);
      }
    }
  };

  export default fetchDate
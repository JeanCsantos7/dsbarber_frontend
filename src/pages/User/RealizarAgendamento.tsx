import Header from "@/components/ui/header";
import { Servicos } from "@/interface/ServiçosData";

import axios from "axios";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import type Datas from "@/interface/datas";
import type HorariosI from "@/interface/horariosI";
import ModalConfirmacao2 from "@/components/ui/modalConfirmacao2";

const RealizarAgendamento = () => {
  const [datasSelecionadas, setDatasSelecionadas] = useState<string>("");
  const [horariosSelecionados, setHorariosSelecionados] = useState<string>("");
  const [servicos, setServicos] = useState<string>("");
  const [horas, setHoras] = useState<HorariosI[]>([]);
  const [datas, setDatas] = useState<Datas[]>([]);
  const [idData, setIdData] = useState<number>(0);
  const [idHoras, setIdHoras] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const nomeCliente = sessionStorage.getItem("nomeCliente");
  const telefoneCliente = sessionStorage.getItem("telefone");
  const emailCliente = sessionStorage.getItem("emailCliente");

  const fetchDate = async () => {
    try {
      const linkAPI = "http://localhost:5000/getFreeDates";
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

  const fetchHours = async (id_data: number) => {
    try {
      const linkAPI = `http://localhost:5000/getAgendamentosById/${id_data}/Livre`;
      const response = await axios.get(linkAPI);
      setHoras(response.data);
      setIdData(id_data);
    } catch (error: any) {
      if (error.response) alert(error.response.data.message);
    }
  };

  const submitEmailDuh = async () => {
    try {
      const linkAPI = "http://localhost:5000/submitEmailAdmin";
      const response = await axios.post(linkAPI, {
        name: nomeCliente,
        servico: servicos,
        email: emailCliente,
        date: datasSelecionadas,
        telefone: telefoneCliente,
      });
      return response;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const linkAPI = "http://localhost:5000/createHorariosMarcados";
      const response = await axios.post(linkAPI, {
        id_horas: idHoras,
        nomecliente: nomeCliente,
        emailcliente: emailCliente,
        telefone: telefoneCliente,
        servico: servicos,
        data: datasSelecionadas,
        hora: horariosSelecionados,
      });

      submitEmailDuh();
      setShowModal(true);
      setDatasSelecionadas("");
      setHorariosSelecionados("");
      setServicos("");

      setTimeout(() => setShowModal(false), 3800);
      return response;
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        setShowModal(false);
      }
    }
  };

  useEffect(() => {
    fetchDate();
  }, [idHoras]);

  return (
    <>
      <Header />

      <div className="bg-[#2c2c2c] shadow-md w-full min-h-[14vh] text-white px-6 py-4 flex items-center">
        <h1 className="font-semibold text-2xl">Realizar Agendamento</h1>
      </div>

      <div className="lg:flex flex-col justify-center items-center max-w-4xl mx-auto px-6 py-8">
        <p className="text-sm sm:text-base leading-relaxed text-[#fff] mb-6">
          Aqui você pode realizar agendamentos de serviços de corte e barba.
        </p>

        <form
          method="POST"
          onSubmit={submitForm}
          className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg flex gap-4.5 flex-col lg:w-[56%] md:w-full"
        >
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-white">Serviço</Label>
            <select
              className="w-full border text-white border-white bg-[#2c2c2c] p-2 rounded-md"
              value={servicos}
              onChange={(e) => setServicos(e.target.value)}
              required
            >
              <option value="">Selecione o serviço</option>
              {Servicos.map((result) => (
                <option key={result.id} value={result.servico}>
                  {result.servico}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm text-white">Datas disponíveis</Label>
            <select
              className="w-full border text-white border-white bg-[#2c2c2c] p-2 rounded-md"
              value={datasSelecionadas}
              onChange={(e) => {
                setDatasSelecionadas(e.target.value);
                const dataSelecionada = datas.find((d) => d.data === e.target.value);
                if (dataSelecionada) {
                  fetchHours(dataSelecionada.id_datas);
                }
              }}
              required
              disabled={servicos.length === 0}
            >
              <option value="">Selecione uma data</option>
              {servicos.length === 0
                ? null
                : datas.map((item) => (
                    <option key={item.id_datas} value={item.data}>
                      {item.data}
                    </option>
                  ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label className="text-sm text-white">Horários disponíveis</Label>
            <select
              className="w-full border text-white border-white bg-[#2c2c2c] p-2 rounded-md"
              value={horariosSelecionados}
              onChange={(e) => {
                setHorariosSelecionados(e.target.value);
                const horaSelecionada = horas.find((h) => h.horas === e.target.value);
                if (horaSelecionada) {
                  setIdHoras(horaSelecionada.id_horas);
                }
              }}
              required
              disabled={datasSelecionadas.length === 0}
            >
              <option value="">Selecione um horário</option>
              {datasSelecionadas.length === 0
                ? null
                : horas.map((item) => (
                    <option key={item.id_horas} value={item.horas}>
                      {item.horas}
                    </option>
                  ))}
            </select>
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#528a14] w-full sm:w-2/3 md:w-1/2 text-white px-6 py-3 rounded-md hover:bg-[#9cd857] transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      {showModal && (
       <div className="fixed inset-0 bg-[#141414] flex items-center justify-center z-50"> 
         <ModalConfirmacao2 />
       </div>
      )}

    </>
  );
};

export default RealizarAgendamento;

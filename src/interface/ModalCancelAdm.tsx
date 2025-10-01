export default interface ModalCancelAdmProps {
  
  nomecliente: string, 
  emailcliente: string,
  data: string,
  horas: string,
  confirmDelete: (id_marcados: number, id_horas: number) => void;
  id_marcados: number;
  id_horas: number;
}
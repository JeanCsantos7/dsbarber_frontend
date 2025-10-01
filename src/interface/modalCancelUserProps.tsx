export default interface ModalCancelUserProps {
  confirmDelete: (id_marcados: number, id_horas: number) => void;
  nomecliente: string, 
  emailcliente: string,
  data: string,
  hora: string,
  id_marcados: number;
  id_horas: number;
}
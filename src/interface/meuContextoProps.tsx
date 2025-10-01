export default  interface MeuContextoProps {
  emailcliente: string;
  setEmailCliente: React.Dispatch<React.SetStateAction<string>>;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  hora: string;
  setHora: React.Dispatch<React.SetStateAction<string>>;
}

export default interface postUsersProps {
  e: React.FormEvent<HTMLFormElement>;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  setControlarExibicao: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: (path: string) => void;
}
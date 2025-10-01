export default interface LoginAdminProps {
    e: React.FormEvent;
    email: string;
    senha: string;
    messageError: string;
    setMessageError: React.Dispatch<React.SetStateAction<string>>;
    controlError: boolean;
    setControlError: React.Dispatch<React.SetStateAction<boolean>>;
    navigate: (path: string) => void;
    
}
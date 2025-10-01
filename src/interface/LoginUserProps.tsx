

export default interface LoginUserProps {
    e: React.FormEvent<HTMLElement>;
    email: string;
    senha: string;
    navigate: (path: string) => void;
    setControlError: (value: boolean) => void;
    setMessageError: (value: string) => void;
}
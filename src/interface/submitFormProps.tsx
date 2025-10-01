export default interface submitFormProps {
    e: React.FormEvent<HTMLElement>;
    idHoras: number;
    nomeCliente?: string | any
    emailCliente: string | any;
    telefoneCliente: string | any;
    servicos: string | any;
    datasSelecionadas: string | any;
    horariosSelecionados: string | any;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setDatasSelecionadas: React.Dispatch<React.SetStateAction<string>>;
    setHorariosSelecionados: React.Dispatch<React.SetStateAction<string>>;
    setServicos: React.Dispatch<React.SetStateAction<string>>;
    


}

export default interface submitDatasProps {
setSubmitData: React.Dispatch<React.SetStateAction<boolean>>,
setSubmitHorario: React.Dispatch<React.SetStateAction<boolean>>,
setDatasSelecionadas: React.Dispatch<React.SetStateAction<string>>,
datasSelecionadas: string,
e: React.FormEvent,
}
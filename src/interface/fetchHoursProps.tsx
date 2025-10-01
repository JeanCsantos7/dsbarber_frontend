export default interface fetchHoursProps {
    setHoras: React.Dispatch<React.SetStateAction<any[]>>;
    setIdData: React.Dispatch<React.SetStateAction<number>> | any;
    id_data: number;
}
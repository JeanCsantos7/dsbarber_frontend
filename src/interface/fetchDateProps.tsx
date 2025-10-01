import type Datas from "./datas"

export default interface fetchDateProps {
    setDatas: React.Dispatch<React.SetStateAction<Datas[]>>
}
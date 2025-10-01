
import Logotipo from "../../assets/Logotipo Duh.png"
import MenuLateralAdm from "@/pages/Admin/MenuLateralAdm";




const Header = () => {
  

  
  return (
    
    <>
      <header className="bg-[#528a14] flex items-center justify-between h-[14vh] w-full">

     
      <div className="flex items-center">
          <img src={Logotipo} alt="Logotipo" className="h-[20vh] p-[6%] " />
        </div>
     
      <MenuLateralAdm/>
      
  
    </header>

  
    </>
  
    
  )
}
export default Header;
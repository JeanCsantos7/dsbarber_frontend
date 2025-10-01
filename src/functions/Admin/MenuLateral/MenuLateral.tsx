import type LogoutProps from "@/interface/Logout";  

  const Logout = ({navigate} : LogoutProps) => {

      sessionStorage.removeItem("tokenAdmin");
      sessionStorage.removeItem("emailAdmin");
      sessionStorage.remove("roleAdmin");

   navigate("/LoginAdmin")

   }

   export default Logout;
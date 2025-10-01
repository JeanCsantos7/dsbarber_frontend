import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const[controlError, setControlError] = useState<boolean>(false)
  const[messageError, setMessageError] = useState<string>("")

  const Logar = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const linkAPI = "http://localhost:5000/Login";
      const response = await axios.post(
        linkAPI,
        {
          email: email,
          senha: senha,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      navigate("/AreaCliente");
      const { token, id, nome, emailCliente, role, telefone } = response.data;

      sessionStorage.setItem("tokenCliente", token);
      sessionStorage.setItem("idCliente", id);
      sessionStorage.setItem("nomeCliente", nome);
      sessionStorage.setItem("roleCliente", role);
      sessionStorage.setItem("telefone", telefone);
      sessionStorage.setItem("emailCliente", emailCliente);

      return response;
    } catch (error: any) {
   
      if(error.response)
      {

        setTimeout(() => {
          setControlError(false);
        }, 4500);
            
            setControlError(true)
            setMessageError(error.response.data.message)
      }
      
    }
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex justify-center items-center px-4"
        style={{
          backgroundImage: `url(https://images.newrepublic.com/9bba0e56c589fb3e06191969202abb446327a86a.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#000]/75 backdrop-blur-sm z-0" />

        <div className="relative z-10 w-full max-w-sm">
          <Card className="w-full max-w-sm shadow-lg shadow-[#528a14]">
            <CardHeader>
              <CardTitle className="text-center text-xl font-bold text-[#528a14]">
                Faça seu Login
              </CardTitle>
              <CardDescription className="text-center">
                Entre com seu email e senha para acessar sua conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={Logar}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#528a14]"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      onChange={(e) => setSenha(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2">
                  <Button
                    type="submit"
                    className="w-full mt-9 bg-[#528a14] text-white font-semibold hover:bg-[#8ece49] transition-colors duration-700 ease-in-out"
                  >
                    Login
                  </Button>

                  {
                    controlError && 
                    <p className="text-md text-center mt-[4%] text-[#d12525]">
                      {messageError}
                    </p>
                  }

                  <h1 className="mt-[3%] text-sm">Ainda não tem uma conta?</h1>

                  <h2
                    onClick={() => navigate("/Cadastro")}
                    className="cursor-pointer text-center text-sm font-semibold text-[#528a14] hover:underline"
                  >
                    Cadastre-se
                  </h2>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

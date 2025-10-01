import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import ModalConfirmacao from "@/components/ui/modalConfirmacao";
import { useState } from "react";
import postUsers from "@/functions/User/Cadastro/postUsers";

const Cadastro = () => {
  const navigate = useNavigate();
  const [controlarExibicao, setControlarExibicao] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

 

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
          <Card className="w-full max-w-sm  shadow-lg shadow-[#528a14]">
            <CardHeader>
              <CardTitle className="text-center text-xl font-bold text-[#528a14]">
                Faça seu Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form method="POST" onSubmit={(e) => postUsers({ e, nome, email, telefone, senha, setControlarExibicao, navigate })} className="flex flex-col gap-4">
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="m@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Telefone</Label>
                    <Input
                      id="telefone"
                      type="phone"
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(+DD)(NUMERO)"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Senha</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      onChange={(e) => setSenha(e.target.value)}
                      required
                      placeholder="Digite uma senha"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[4.5vh] rounded-lg mt-[9%] text-[#fff] bg-[#528a14] font-semibold hover:bg-[#84b44d] ease-in-out 700ms"
                >
                  Cadastrar
                </button>

                {controlarExibicao && <ModalConfirmacao />}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

import Loader from "../../assets/Loader.png"

const TelaLogout = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#141414] via-[#1f1f1f] to-[#0a0a0a] flex flex-col items-center justify-center z-50">
      <div className=" rounded-2xl  p-10 flex flex-col items-center animate-fadeIn">
        <h1 className=" animate-pulse
         text-4xl font-extrabold mb-2 text-white drop-shadow-md">
          Saindo...
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Até a próxima visita!
        </p>
        <img
          className="w-40 animate-bounce drop-shadow-xl"
          src={Loader}
          alt="Loading..."
        />
      </div>
    </div>
  )
}

export default TelaLogout

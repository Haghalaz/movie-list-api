// Icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Login(props) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="md:6/12 shadow-3xl w-10/12 bg-[#2C2C37] lg:w-5/12">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-4 text-white">
          <AiOutlineMail />
        </div>
        <div className="flex flex-col justify-between pb-10">
          <form className="p-12 md:p-24">
            <div className="mb-6 flex items-center text-lg md:mb-8">
              <AiOutlineUser className="absolute ml-3" />
              <input
                type="text"
                id="username"
                className="w-full rounded-lg bg-gray-200 py-2 pl-12 focus:outline-none md:py-4"
                placeholder="Usuário"
              />
            </div>
            <div className="mb-6 flex items-center text-lg md:mb-8">
              <AiOutlineLock className="absolute ml-3" />
              <input
                type="password"
                id="password"
                className="w-full rounded-lg bg-gray-200 py-2 pl-12 focus:outline-none md:py-4"
                placeholder="Senha"
              />
            </div>
            <button className="w-full bg-[#3E8C32] p-2 font-medium uppercase text-white md:p-4">
              Login
            </button>
          </form>
          <p class="text-md flex flex-col items-center justify-center text-center text-gray-500">
            <span>Não tem uma conta?</span>
            <a
              href="/Register"
              class="cursor-pointer text-[#3E8C32] transition duration-300 ease-in hover:text-[#8CD955]"
            >
              Registrar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

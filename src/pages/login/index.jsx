// Icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Login(props) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-[#2C2C37] lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-700 text-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
          <AiOutlineMail />
        </div>
        <div className="flex flex-col pb-10 justify-between">
          <form className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <AiOutlineUser className="absolute ml-3" />
              <input
                type="text"
                id="username"
                className="bg-gray-200 rounded-lg pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <AiOutlineLock className="absolute ml-3" />
              <input
                type="password"
                id="password"
                className="bg-gray-200 rounded-lg pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
              />
            </div>
            <button className="bg-[#3E8C32] font-medium p-2 md:p-4 text-white uppercase w-full">
              Login
            </button>
          </form>
          <p class="flex flex-col items-center justify-center text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <a
              href="/Register"
              class="text-[#3E8C32] hover:text-[#8CD955] cursor-pointer transition ease-in duration-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

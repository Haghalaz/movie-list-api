export default function HeaderMenu(props) {
  return (
    <header class="w-full fixed text-white bg-[#1E1F28] shadow-sm body-font">
      <div class="container flex p-6 justify-between mx-auto ">
        <a href="/" className="header-Font hover:text-[#8CD955]">
          TIPFLIX
        </a>

        <div class="items-center h-full pl-6 ml-6">
          <a href="Login" class="mr-5 font-medium hover:text-[#8CD955]">
            Login
          </a>
          <a
            href="#_"
            class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-[#3E8C32] rounded shadow outline-none active:bg-teal-600 hover:shadow-md hover:bg-[#8CD955] focus:outline-none ease"
          >
            Surprise Me
          </a>
        </div>
      </div>
    </header>
  );
}

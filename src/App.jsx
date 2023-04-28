// Components
import HeaderMenu from "./components/headerMenu";
import Rotas from "./routes/routes";

function App() {
  return (
    <div className="h-screen bg-[#15161C]">
      <HeaderMenu></HeaderMenu>
      <Rotas></Rotas>
    </div>
  );
}

export default App;

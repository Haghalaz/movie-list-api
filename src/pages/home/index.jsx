import CardMovie from "../../components/cardMovie";

export default function HomePage(props) {
  return (
    <div className="container mx-auto flex h-auto flex-col gap-10 py-28">
      <h2 className="font-semibold text-white">Featured</h2>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        <CardMovie />
      </div>
    </div>
  );
}

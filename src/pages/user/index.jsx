import { useEffect, useState } from "react";
import axios from "axios";

import CardMovie from "../../components/cardMovie";

const MOVIE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export default function UserPage() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axios.get(MOVIE_URL).then((response) => {
      setDataMovie(response.data.results.slice(0, -15));
    });
  }, []);

  return (
    <div className="container mx-auto flex h-auto flex-col gap-10 py-28 text-white">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Luiz Coelho</h2>
        <div className="flex gap-5">
          <button className="ease rounded border border-red-600 px-4 py-4 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:bg-red-700 hover:shadow-md">
            Deletar conta
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h4>Meus filmes</h4>

        <div className="grid grid-cols-3 justify-items-center gap-5">
          <CardMovie data={dataMovie} />
        </div>
      </div>
    </div>
  );
}

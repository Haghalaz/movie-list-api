import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../components/cardMovie";

const MOVIE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export default function HomePage() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axios.get(MOVIE_URL).then((response) => {
      setDataMovie(response.data.results.slice(0, -2));
    });
  }, []);

  return (
    <div className="container mx-auto flex h-auto flex-col gap-10 py-28">
      <h2 className="font-semibold text-white">Featured</h2>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        <CardMovie data={dataMovie} />
      </div>
    </div>
  );
}

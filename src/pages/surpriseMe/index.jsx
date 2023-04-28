import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../components/cardMovie";

const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR";

export default function SurpriseMe() {
  const [dataMovie, setDataMovie] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [genresId, setGenresId] = useState(28);

  useEffect(() => {
    axios.get(GENRES_URL).then((response) => {
      var response = response.data.genres;
      setGenresList(response);
    });
  }, []);

  useEffect(() => {
    const MOVIE_URL =
      "https://api.themoviedb.org/3/discover/movie?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
      genresId +
      "&with_watch_monetization_types=flatrate";

    axios.get(MOVIE_URL).then((response) => {
      var response = response.data.results;
      response.length = 3;

      setDataMovie(response);
    });
  }, [genresId]);

  console.log(genresList);

  return (
    <div className="container mx-auto flex h-full flex-col justify-between gap-10 py-28">
      <h2 className="font-semibold text-white">Me surpreenda</h2>
      <div className="grid place-items-center">
        <small className="mb-2 w-2/3 w-full text-white opacity-60">
          Obtenha recomendações de filmes baseado no genêro escolhido
        </small>
        <div className="relative flex h-14 w-2/3 flex-row-reverse overflow-clip rounded-lg">
          <select
            className="peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
            type="text"
            name="domain"
            id="domain"
            placeholder="domain.dev"
            onChange={(evt) => {
              setGenresId(evt.target.value);
            }}
          >
            {genresList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <label
            className="flex grid w-[14rem] place-items-center items-center rounded-l-lg border border-slate-800 bg-zinc-800 text-sm text-white transition-colors duration-300 peer-focus:border-[#3E8C32] peer-focus:bg-[#3E8C32] peer-focus:text-white"
            htmlFor="domain"
          >
            Escolha um gênero
          </label>
        </div>
      </div>
      <h3 className="font-semibold text-white">Recomendações</h3>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        <CardMovie data={dataMovie} />
      </div>
    </div>
  );
}

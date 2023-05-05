import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../components/cardMovie";

const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR";

export default function SurpriseMe() {
  const [dataMovie, setDataMovie] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [genresId, setGenresId] = useState(28);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios.get(GENRES_URL).then((response) => {
      setGenresList(response.data.genres);
    });
  }, []);

  useEffect(() => {
    const RANDOM_PAGE = Math.floor(Math.random() * 150) + 1;
    const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${RANDOM_PAGE}&with_genres=${genresId}&with_watch_monetization_types=flatrate`;

    axios.get(MOVIE_URL).then((response) => {
      const USED_INDEXES = [];
      const RANDOM_MOVIES = [];

      const RESPONSE_DATA = response.data.results;

      while (RANDOM_MOVIES.length < 3) {
        const randomIndex = Math.floor(Math.random() * RESPONSE_DATA.length);
        if (!USED_INDEXES.includes(randomIndex)) {
          RANDOM_MOVIES.push(RESPONSE_DATA[randomIndex]);
          USED_INDEXES.push(randomIndex);
        }
      }

      setDataMovie(RANDOM_MOVIES);
    });
  }, [genresId, reload]);

  return (
    <div className="container mx-auto flex h-full flex-col justify-between gap-10 py-28">
      <h2 className="font-semibold text-white">Me surpreenda</h2>
      <div className="grid place-items-center">
        <small className="mb-2 w-full text-white opacity-60">
          Obtenha recomendações de filmes baseado no genêro escolhido
        </small>
        <div className="flex w-full gap-5">
          <div className="relative flex h-14 w-5/6 flex-row-reverse overflow-clip rounded-lg">
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
          <button
            className="ease w-1/6 rounded bg-[#3E8C32] px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:bg-[#8CD955] hover:shadow-md focus:outline-none active:bg-teal-600"
            onClick={() => setReload((state) => !state)}
          >
            Buscar filmes
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-white">Recomendações</h3>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        <CardMovie data={dataMovie} />
      </div>
    </div>
  );
}

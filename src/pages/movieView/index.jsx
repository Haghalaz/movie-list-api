import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import {
  AiFillHeart,
  AiOutlineStar,
  AiOutlineCalendar,
  AiOutlineClockCircle,
} from "react-icons/ai";

function currencyFormat(num) {
  if (!!num) {
    return "US$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else return `Sem dados`;
}

function minutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? `${hours}h` : "";
  const formattedMinutes =
    remainingMinutes > 0 ? ` ${remainingMinutes}min` : "";
  return formattedHours + formattedMinutes;
}

export default function MovieView(props) {
  const [dataMovie, setDataMovie] = useState(null);

  const [searchParams] = useSearchParams();
  const MOVIE_ID = searchParams.get("m");

  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR`;

  useEffect(() => {
    axios.get(MOVIE_URL).then((response) => {
      setDataMovie(response.data);
    });
  }, [MOVIE_URL]);

  return (
    <>
      {dataMovie && (
        <div className="container mx-auto grid h-full grid-flow-row-dense grid-cols-6 content-stretch gap-10 py-28 text-white">
          <div className="col-span-2 h-full">
            <div className="relative flex">
              <img
                className="bg-gradient-to w-full rounded-lg bg-none"
                src={IMG_URL + dataMovie.poster_path}
                alt="Movie Poster"
              />
              <span className="absolute h-full w-full bg-gradient-to-t from-[#15161C]"></span>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-between gap-10">
            <div className="space-y-2">
              <h2 className="font-semibold">{dataMovie.title}</h2>
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar />
                  <p>{dataMovie.release_date.split("-")[0]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineStar />
                  <p>{dataMovie.vote_average.toFixed(1)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineClockCircle />
                  <p>{minutesToHoursAndMinutes(dataMovie.runtime)}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <h4 className="font-semibold">SINOPSE</h4>
              <p>{dataMovie.overview}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <h5 className="font-semibold">Genêros: </h5>
              {dataMovie.genres.map((item) => (
                <small className="rounded-lg border border-green-600 bg-green-900 px-2 py-1">
                  {item.name}
                </small>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h5 className="font-semibold">Produtoras: </h5>
              {dataMovie.production_companies.map((item) => (
                <small className="rounded-lg border border-zinc-600 bg-zinc-900 px-2 py-1">
                  {item.name}
                </small>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h5 className="font-semibold">Países de produção: </h5>
              {dataMovie.production_countries.map((item) => (
                <small className="rounded-lg border border-zinc-600 bg-zinc-900 px-2 py-1">
                  {item.name}
                </small>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="space-y-1">
                <h5 className="font-semibold">Lançamento</h5>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Avaliação</h5>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Votos</h5>
                <div className="flex items-center gap-2">
                  <AiOutlineStar />
                  <p>{dataMovie.vote_count}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Duração</h5>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Orçamento</h5>

                <div className="flex items-center gap-2">
                  <p>{currencyFormat(dataMovie.budget)}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Receita</h5>
                <div className="flex items-center gap-2">
                  <p>{currencyFormat(dataMovie.revenue)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <input type="checkbox" id="choose-me" className="peer hidden" />
            <label
              for="choose-me"
              className="flex h-fit cursor-pointer select-none items-center gap-2 rounded-lg border-2 border-gray-200 p-2 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:border-[#D20939] peer-checked:bg-[#D20939] peer-checked:text-gray-900 "
            >
              <AiFillHeart className="h-5 w-5" /> Favoritar
            </label>
          </div>
        </div>
      )}
    </>
  );
}

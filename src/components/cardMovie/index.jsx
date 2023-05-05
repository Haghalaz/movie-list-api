import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=440d2f7f4782ff80872b983192a83cf8&language=pt-BR";

export default function CardMovie(props) {
  const [genresList, setGenresList] = useState([]);

  console.log(genresList);

  useEffect(() => {
    axios.get(GENRES_URL).then((response) => {
      setGenresList(response.data.genres);
    });
  }, []);

  function getGenreById(id) {
    for (let i = 0; i < genresList.length; i++) {
      if (genresList[i].id === id) {
        return genresList[i].name;
      } else {
        continue;
      }
    }
  }

  return (
    <>
      {props.data.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 rounded bg-[#1e1f28] p-5 text-white"
        >
          <img
            className="w-2/5 rounded-xl"
            src={IMG_URL + item.poster_path}
            alt="Movie Poster"
          />

          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">{item.title}</h4>
              <div className="flex justify-between text-white opacity-70">
                <div className="flex items-center gap-2">
                  <AiOutlineStar />
                  <small>{item.vote_average}</small>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar />
                  <small>{item.release_date}</small>
                </div>
                <div className="flex items-center gap-2">
                  <TbLanguage />
                  <small>{item.original_language}</small>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {item.genre_ids.map((item, index) => (
                  <small
                    key={index}
                    className="rounded-lg border border-green-600 bg-green-900 px-2 py-1"
                  >
                    {getGenreById(item)}
                  </small>
                ))}
              </div>
            </div>

            <a
              className="grid w-auto cursor-pointer place-items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800"
              href={`/Movie?m=${item.id}`}
            >
              Ver mais +
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

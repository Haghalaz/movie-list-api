import { useState } from "react";

import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export default function CardMovie(props) {
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
                    Gen {item}
                  </small>
                ))}
              </div>
            </div>

            <a
              className="grid w-auto cursor-pointer place-items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800"
              href={`/Movie?m=${item.id}`}
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

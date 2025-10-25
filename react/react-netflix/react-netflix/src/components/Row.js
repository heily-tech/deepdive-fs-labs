import React, { useState, useEffect } from 'react'
import axios from "../api/axios"
import "./Row.css";
import MovieModal from './MovieModal';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Row({title, id, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, [fetchUrl]);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    };

    return (
        <section className="row">
            <h2>{title}</h2>
            {/* <div className="slider">
                <div className="slider__arrow-left">
                    <span className="arrow" onClick={() => {document.getElementById(id).scrollLeft -= window.innerWidth - 80;}}>{"<"}</span>
                </div> */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={movies.length > 6}
                breakpoints={{
                    1378: { slidesPerView: 8, slidesPerGroup: 5 },
                    998: { slidesPerView: 5, slidesPerGroup: 4 },
                    625: { slidesPerView: 4, slidesPerGroup: 5 },
                    0: { slidesPerView: 2, slidesPerGroup: 10 },
                }}
                spaceBetween={10}
                navigation
                // pagination={{clickable: true}}
                scrollbar={{draggable: false}} >
                <div id={id} className="row__posters">
                    {movies.map(movie => (
                        <SwiperSlide>
                            <img
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name} 
                                onClick={() => handleClick(movie)}/>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
                {/* <div className="slider__arrow-right">
                    <span className="arrow" onClick={() => {document.getElementById(id).scrollLeft += window.innerWidth - 80;}}>{">"}</span>
                </div>
            </div> */}
            {modalOpen && (
                <MovieModal
                    {...movieSelected}
                    setModalOpen={setModalOpen} />
            )}
        </section>
    )
}

export default Row

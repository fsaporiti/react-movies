import { MovieCard } from "./MovieCard";
import style from "../css/MoviesGrid.module.css"
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export function MoviesGrid () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setLoading(true)
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU2MmJhZDg1MWJhNGFhMDk3NGVjNTUxMDhjOWZkNCIsInN1YiI6IjY1MDQ3MDk4YjUxM2E4MDEzYTBiMzY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0f7iscUtDBnWzcd92JE_gW9Gw7X1deFNj59RdVb7VX0",
            }
        }).then(result => result.json()).then(data => {
            setMovies(data.results);
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    return <>
        <ul className={style.moviesGrid}>
            {movies.map((movie)=> (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    </>
}
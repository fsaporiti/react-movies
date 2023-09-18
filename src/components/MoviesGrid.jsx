import { MovieCard } from "./MovieCard";
import style from "../css/MoviesGrid.module.css"
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { useLocation } from "react-router-dom";

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export function MoviesGrid () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    const query = useQuery()
    const search = query.get("search")
    
    useEffect(() => {
        setLoading(true)
        const searchUrl = search ? `/search/movie?query=${search}` : `discover/movie`
        fetch(`https://api.themoviedb.org/3/${searchUrl}`, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU2MmJhZDg1MWJhNGFhMDk3NGVjNTUxMDhjOWZkNCIsInN1YiI6IjY1MDQ3MDk4YjUxM2E4MDEzYTBiMzY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0f7iscUtDBnWzcd92JE_gW9Gw7X1deFNj59RdVb7VX0",
            }
        }).then(result => result.json()).then(data => {
            setMovies(data.results);
            setLoading(false)
        })
    }, [search])

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
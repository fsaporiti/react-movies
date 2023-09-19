import { MovieCard } from "./MovieCard";
import style from "../css/MoviesGrid.module.css"
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component"
import { get } from "../httpClient";

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export function MoviesGrid () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);

    const query = useQuery()
    const search = query.get("search")
    
    useEffect(() => {
        setLoading(true)
        const searchUrl = search 
            ? `/search/movie?query= ${search}&page= ${page}` 
            : `/discover/movie?page= ${page}`
        get(searchUrl).then(data => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages)
            setLoading(false)
        })
        .catch(error => console.error(error));
    }, [search, page])             

    return (
    <InfiniteScroll  
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Loading />}
    >
            <ul className={style.moviesGrid}>
                {movies.map((movie)=> (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
    </InfiniteScroll>
    )
}

     
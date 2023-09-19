import { useLocation } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { SearchMovies } from "../components/SearchMovies";

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export function HomePage () {
    const query = useQuery()
    const search = query.get("search")
    return ( <>
        <SearchMovies/>
        <MoviesGrid key={search}/>
    </>
    )
}
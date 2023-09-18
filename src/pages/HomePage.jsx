import { MoviesGrid } from "../components/MoviesGrid";
import { SearchMovies } from "../components/SearchMovies";

export function HomePage () {
    return ( <>
        <SearchMovies/>
        <MoviesGrid/>
    </>
    )
}
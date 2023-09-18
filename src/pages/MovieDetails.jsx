import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../css/MovieDetails.module.css"
import { Loading } from "../components/Loading";


export function MovieDetails () {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movieId, setMovieId] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        fetch("https://api.themoviedb.org/3/movie/" + id, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU2MmJhZDg1MWJhNGFhMDk3NGVjNTUxMDhjOWZkNCIsInN1YiI6IjY1MDQ3MDk4YjUxM2E4MDEzYTBiMzY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0f7iscUtDBnWzcd92JE_gW9Gw7X1deFNj59RdVb7VX0",
            }
        }).then(result => result.json()).then(data => {
            setMovieId(data)
            setIsLoading(false)
        })
}, [id])

    if (isLoading) {
        return <Loading />
    }

    const imgUrl = "https://image.tmdb.org/t/p/w500" + movieId.poster_path
    return (
        <div className={style.detailsContainer}>
            <img className={`${style.col} ${style.movieImgDetail}`} src={imgUrl} alt={movieId.title} />
            <div className={`${style.col} ${style.movieDetails}`}>
                <p><strong>Title:</strong> {movieId.title}</p>
                <p><strong>Genres:</strong> {movieId.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description:</strong> {movieId.overview}</p>
            </div>
        </div>
    )
}



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../css/MovieDetails.module.css"
import { Loading } from "../components/Loading";
import { get } from "../httpClient";


export function MovieDetails () {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movieId, setMovieId] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        get(`/movie/${id}`).then(data => {
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



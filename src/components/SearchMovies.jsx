import style from "../css/SearchMovies.module.css"
import { FaSearch } from 'react-icons/fa';

export function SearchMovies() {
    return (
        <form className={style.searchContainer}>
            <div className={style.searchBox}>
                <input type="text" className={style.searchInput}/>
                <button type="submit" className={style.searchButton}>
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

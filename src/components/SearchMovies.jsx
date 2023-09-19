import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../css/SearchMovies.module.css"
import { FaSearch } from 'react-icons/fa';

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export function SearchMovies() {
    const query = useQuery()
    const search = query.get("search")
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/?search=${searchText}`)
    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                    type="text" 
                    placeholder="Title"
                    className={style.searchInput} 
                    value={searchText}
                    onChange={(event) => {
                        const value = event.target.value;
                        setSearchText(value);
                        navigate(`/?search=${value}`)
                    }}              
                />
                <button type="submit" className={style.searchButton}>
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

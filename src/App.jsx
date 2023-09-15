import style from "./css/App.module.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { MovieDetails } from "./pages/MovieDetails";
import { HomePage } from "./pages/HomePage";
// import { MovieDetails } from "./pages/MovieDetails";


export function App () {
    return (
        <BrowserRouter>
            <header>
                <Link to="/" style={{ textDecoration:"none", color: "white" }}>
                    <h1 className={style.title}>Movies</h1>
                </Link>  
            </header>
            <main>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage/>}/>
                        <Route path="/movies/:id" element={<MovieDetails/>}/>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

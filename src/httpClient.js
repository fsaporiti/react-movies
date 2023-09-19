export function get(path) {
     return (
        fetch("https://api.themoviedb.org/3" + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU2MmJhZDg1MWJhNGFhMDk3NGVjNTUxMDhjOWZkNCIsInN1YiI6IjY1MDQ3MDk4YjUxM2E4MDEzYTBiMzY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0f7iscUtDBnWzcd92JE_gW9Gw7X1deFNj59RdVb7VX0",
                    "Content-Type": "application/json;charset=utf-8"
            }
        }).then((result) => result.json())
    )
}
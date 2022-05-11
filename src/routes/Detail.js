import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Detail() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState("");
  const { id } = useParams()

  const getMovie = async() => {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await res.json()
    console.log(json.data.movie);
    setLoading(true);
    setMovie(json.data.movie);
    return;
  }
  useEffect(() => {
    getMovie()
  }, []);
  return (
    <>
    <Link to="/">
      <h1>
        Home
      </h1>
    </Link>
    <img src={movie.large_cover_image} />
    <h1>Title : {movie.title_long}</h1>
    <div>
      {loading ? 
        <div>
          <h2>run-time : {movie.runtime} min</h2>
          <h2>rating : {movie.rating}</h2>
          <h2>{movie.description_full}</h2>
        </div>
          : 
        <h1>Loading...</h1>}
    </div>
    </>
  )
}
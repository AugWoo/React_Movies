import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>
            {movie.title} ({movie.year})
          </h2>
          <h4>{movie.description_full}</h4>
          <ul>
            {movie.torrents.map((src) => (
              <li key={src.hash}>
                <a href={src}>Download Movie</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;

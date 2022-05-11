import { Link } from "react-router-dom"
import propTypes from "prop-types";

export default function Movie(
  { 
    coverImg,
    title,
    summary,
    genres,
    id,
  }) {
    return (
      <div>
        <img src={coverImg} alt="img" />
        <h2>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </div>
    )
}

Movie.propTypes = {
  id:propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,

}
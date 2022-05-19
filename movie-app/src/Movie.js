

import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {
	return (
		<div className="movie">
			<img src={poster} alt={title} />
			<div className="movie__column">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<p className="movie__summary">{summary.slice(0, 150)}...</p>
				<ul className="movie__genres">{genres.map((genres, id) => {
					return <li key={id} className="movie__item">{genres}</li>
				})}
				</ul>
			</div>
		</div>
	)
}

export default Movie;


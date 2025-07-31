import star from "./assets/star.svg"

export default function MovieCard({ movie: { title, release_date, vote_average, poster_path, original_language } }) {

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <div className="mt-4">
                <p className="text-white">{title}</p>
                <div className="content">
                    <div className="rating">
                        <img src={star} alt="Star icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>•</span>
                    <p className="lang">{original_language}</p>
                    <span>•</span>
                    <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

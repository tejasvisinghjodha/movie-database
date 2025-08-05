exports.handler = async function () {
    const API_KEY = process.env.TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

    try {
        const response = await fetch(url); // ✅ native fetch
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data.results),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch movies." }),
        };
    }
};

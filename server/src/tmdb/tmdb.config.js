const baseUrl = process.env.TMDB_BASE_URL
const key = process.env.TMDB_API_KEY

// Function to get the URL of the TMDB API
const getUrl = (path, params) => {
    const qs = new URLSearchParams(params)
    return `${baseUrl}${path}?api_key=${key}&${qs}` 
}

export default getUrl
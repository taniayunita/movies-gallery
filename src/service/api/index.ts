import axios from 'axios';

const API_KEY = process.env.NEXT_API_KEY_THE_MOVIE_DB; // Make sure to add your TMDb API key in environment variables

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    },
});

export const fetchTopRatedMovies = async () => {
    try {
        const response = await instance.get('/movie/top_rated');
        return response.data.results;
    } catch (error) {
        throw new Error('An error occurred while fetching top-rated movies.');
    }
};


export default instance;
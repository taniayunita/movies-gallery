import axios from 'axios';

const API_KEY = process.env.NEXT_API_KEY_THE_MOVIE_DB || "d212dc1bfc2d8009f736f68f2e71938f"; // Make sure to add your TMDb API key in environment variables
const TOKEN = process.env.NEXT_TOKEN_ACCESS_TMB || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjEyZGMxYmZjMmQ4MDA5ZjczNmY2OGYyZTcxOTM4ZiIsInN1YiI6IjYwMzhhN2JhYjU0MDAyMDA2ZmY0NDVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcmCbjtu38vUUp6LblDFXR1glealfkkOi_f4AFnJrCo"

export const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
    },
});

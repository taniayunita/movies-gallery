"use client"
import React, { useEffect, useState } from 'react'
import { apiMovie } from '@/service/api'
import { CardMovie, CardSkeleton, Search } from '@/components'
import { useRouter } from "next/navigation";

const SearchMovie = ({ params }: any) => {
    const router = useRouter();
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');

    const handDleSearch = () => {
        router.push(`/search/${query.replace(/ /g, "-")}`);
    };

    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }


    const loadNextPage = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
            setLoading(true)
            // if user already at the bottom of the page i set the page for hit the top rated api
            setCurrentPage(prevPage => prevPage + 1); // Increment the current page
        }

    };

    const fetchSearchMovie = async () => {
        try {
            const response = await apiMovie.get(`/search/movie?query=${params.moviename.replace(/-/g, " ")}`);
            setMovies(movies => currentPage === 1 ? response.data.results : [...movies, ...response.data.results]);
            console.log("search", response)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            setLoading(false);
        }

    }
    const handDetilMovie = (movie: any) => {
        router.push(`/movie/${movie}`);
    };

    useEffect(() => {
        fetchSearchMovie()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', loadNextPage);
        return () => {
            window.removeEventListener('scroll', loadNextPage);
        };
    }, [])

    return (
        <div className=' padding-x padding-y max-width'>
            <div className='mt-24 '>
                <Search value={query} onChange={handleChange} onSearch={handDleSearch} />
            </div>
            {loading ?
                <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />

                </div> :
                <div className=" pt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                    {movies.map((movie: any) => (
                        <CardMovie onClick={() => { handDetilMovie(movie.id) }} title={movie.title} key={movie.id} vote={movie.vote_average} image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} handleClickMovie={() => { }} />

                    ))}
                </div>
            }

        </div>
    )
}

export default SearchMovie
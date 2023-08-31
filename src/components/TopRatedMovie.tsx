"use client"
import React, { useState, useEffect } from 'react'
import { apiMovie } from '@/service/api'
import { CardMovieProps } from '@/types'
import { useRouter } from "next/navigation";


//constant
import { yearsOfMovieRelease } from '@/constants'


//component
import { CardMovie, CardSkeleton } from '.'
import { Filter } from '.'
import { Search } from '.'

const TopRatedMovie = () => {
    const router = useRouter();
    const [topRatedMovie, setTopRatedMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredYear, setFilteredYear] = useState(null); // Start with no filter


    const fetchTopRatedMovie = async () => {

        try {
            const response = await apiMovie.get('/movie/top_rated', {
                params: { page: currentPage }, // Pass the current page as a query parameter
            });
            setTopRatedMovie(topRatedMovie => currentPage === 1 ? response.data.results : [...topRatedMovie, ...response.data.results]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            setLoading(false);
        }

    }
    const loadNextPage = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
            setLoading(true)
            // if user already at the bottom of the page i set the page for hit the top rated api
            setCurrentPage(prevPage => prevPage + 1); // Increment the current page
        }

    };

    const handleYearChange = (year: any) => {
        setFilteredYear(year);
    };

    useEffect(() => {
        fetchTopRatedMovie()
    }, [currentPage])

    useEffect(() => {
        window.addEventListener('scroll', loadNextPage);
        return () => {
            window.removeEventListener('scroll', loadNextPage);
        };
    }, [])

    const handDetilMovie = (movie: any) => {
        router.push(`/movie/${movie}`);
    };

    const filteredMovies = filteredYear
        ? topRatedMovie.filter((movie: any) => new Date(movie.release_date).getFullYear().toString() === filteredYear.value)
        : topRatedMovie;

    const ListMovie = () => {
        return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    filteredYear ? filteredMovies.map((movie: any) => (

                        <CardMovie onClick={() => { handDetilMovie(movie.id) }} title={movie.title} key={movie.id} vote={movie.vote_average} image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} handleClickMovie={() => { }} />
                    )) : topRatedMovie.map((movie: any) => (
                        <CardMovie onClick={() => { handDetilMovie(movie.id) }} title={movie.title} key={movie.id} vote={movie.vote_average} image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} handleClickMovie={() => { }} />

                    ))
                }
            </div>
        )
    }

    return (
        <div className=' padding-x padding-y max-width'>

            <div className='home__filters z-10'>
                <Search />
                <Filter options={yearsOfMovieRelease} selected={filteredYear} onYearChange={handleYearChange} />
            </div>
            <div className='movie__lists mt-8 max-width'>
                {loading ? (
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />

                    </div>
                ) : (
                    topRatedMovie.length > 0 || filteredMovies.length > 0 ?
                        <ListMovie /> : <p className='text-2xl text-bold text-black'> no data found</p>

                )}

            </div>
        </div>
    )
}

export default TopRatedMovie
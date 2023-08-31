import React, { useState } from 'react'
import Image from 'next/image'
import { Filter, Hero, Search, CardMovie } from '@/components'
import { yearsOfMovieRelease } from '@/constants'
import { fetchTopRatedMovies } from '@/service/api'

export default async function Home() {

  const topRatedMovie = await fetchTopRatedMovies()

  const isTopRatedMovieEmpty = !Array.isArray(topRatedMovie) || topRatedMovie.length < 1 || !topRatedMovie;


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='top-rated'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Top Rated Movies</h1>
          <p>Explore out top rated movie you might be like</p>
        </div>
        <div className='home__filters z-10'>
          <Search />
          <Filter title='Year' options={yearsOfMovieRelease} />
        </div>
      </div>
      <div className='movie__lists padding-x padding-y mt-8 max-width'>
        {isTopRatedMovieEmpty ?
          <p className='text-center text-xl text-bold'>Oops... no movie available yet</p> :

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {topRatedMovie.map((movie) => (
              <CardMovie key={movie.id} title={movie.title} vote={movie.vote_average} image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>

            ))}
          </div>


        }

      </div>
    </main>
  )
}
